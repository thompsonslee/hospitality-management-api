import { Request, Response, NextFunction } from "express"
import Product from "../models/Product"
import Area from "../models/Area"
import Transaction from "../models/Transaction"
import ProductInstance from "../models/ProductInstances"

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
type cartItem = {
    id: any,
    quantity: number
}
const calcCartWholeSalePrice = async(cart: Array<cartItem>) => {
    const priceArray = cart.map(async(item: cartItem) => {
        const product = await Product.findById(item.id).select('price').exec()
        if(!product){
            throw new Error("product not found")
        }
        return product.price.wholesale * item.quantity
    })
    const arrayToReduce = await Promise.all(priceArray)
    return arrayToReduce.reduce((accum,current) => {
        return accum + current
    },0)
}
const saveInstanceToInventory = async(cartItem:cartItem,areaId:string) => {

    const instance = await ProductInstance.findOne({product: cartItem.id}).exec()
    if(!instance){
        await ProductInstance.create({
                product: cartItem.id,
                area: areaId,
                quantity: cartItem.quantity
        })
    }else{
        await ProductInstance.findOneAndUpdate({
            product: cartItem.id},{quantity: instance.quantity + cartItem.quantity}
        )
    }
}

const orderItems = async(req:Request,res:Response,next:NextFunction) => {
    if(!req.user){
        throw new Error("no user")
    }
    if(!req.body.products){
        throw new Error("no products array given")
    }
    try{
        const cart: Array<cartItem> = req.body.products
        cart.forEach((item) => saveInstanceToInventory(item,req.params.areaId))
        await Transaction.create({
            type: "buy",
            cost: await calcCartWholeSalePrice(cart),
            user: req.user.id,
            area: req.params.areaId,
        })
        res.sendStatus(200)
    }catch(e){
        next(e)
    }
}
export default {getAllAreas, getArea, postArea, getAllTransactions, orderItems}