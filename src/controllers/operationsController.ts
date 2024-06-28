import { Request, Response, NextFunction } from "express"
import Product from "../models/Product"
import Area from "../models/Area"
import Transaction from "../models/Transaction"
import ProductInstance from "../models/ProductInstances"
import { calcCartPrice, saveInstanceToInventory, removeInstanceFromInventory, transferItem} from "../helpers/operationshelpers"

type cartItem = {
    id: any,
    quantity: number
}

const getAllAreas = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const allAreas = await Area.find({user: req.user?.id})
        res.send(allAreas)

    }catch(e){
        next(e)
    }
}

const getArea = async(req:Request,res:Response,next:NextFunction) =>{
    try{
        const area = await Area.findById(req.params.areaId)
        res.send(area)
    }catch(e){
        return next(e)
    }
}

const postArea = async (req:Request,res:Response,next:NextFunction) => {
    try{
        const area = new Area({
            name: req.body.name,
            user: req.user?.id
        })
        await area.save()
        res.sendStatus(200)
    }catch(e){
        return next(e)
    }
}

const getAllTransactions = async (req:Request,res:Response,next:NextFunction) => {
    try{
        const transactions = await Transaction.find({user: req.user?.id})
        res.send(transactions)
    }catch(e){
        next(e)
    }
}

const orderItems = async(req:Request,res:Response,next:NextFunction) => {
    if(!req.user){
        next("no req.user")
        return
    }
    if(!req.body.products){
        next("no req.body.products")
        return
    }
    try{
        const cart: Array<cartItem> = req.body.products
        cart.forEach((item) => saveInstanceToInventory(item,req.params.areaId))
        await Transaction.create({
            type: "buy",
            cost: await calcCartPrice(cart, "wholesale"),
            user: req.user.id,
            area: req.params.areaId,
        })
        res.sendStatus(200)
    }catch(e){
        next(e)
    }
}
const sellItems = async(req:Request,res:Response,next:NextFunction) => {
    if(!req.user){
        next("no req.user")
        return
    }
    if(!req.body.products){
        next("no req.body.products")
        return
    }
    try{
        const cart: Array<cartItem> = req.body.products
        cart.forEach((item) => removeInstanceFromInventory(item))
        await Transaction.create({
            type: "sell",
            cost: await calcCartPrice(cart, "retail"),
            user: req.user.id,
            area: req.params.areaId
        })
        res.sendStatus(200)
    }catch(e){
        next(e)
    }
}


const transferItems = async(req:Request,res:Response,next:NextFunction) => {
    const cart: Array<cartItem> = req.body.products
    cart.forEach((item) => transferItem(item,req.params.areaId, req.params.area2Id))
    res.sendStatus(200)
}

export default {getAllAreas, getArea, postArea, getAllTransactions, orderItems, sellItems, transferItems}