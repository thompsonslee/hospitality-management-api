import { Request,Response,NextFunction } from "express";
import Area from "../models/Area"
import TillLayout from "../models/TillLayout";

const getAllTillLayouts = async(req: Request,res: Response,next: NextFunction) => {
    if(!req.user){
        res.sendStatus(403)
        return
    }
    const userAreaIdObjects = await Area.find({user: req.user._id}).select({"_id": 1})
    const userAreaIds = userAreaIdObjects.map(object => object._id)
    const tillLayouts = await TillLayout.find({area: {$in: userAreaIds}})
    res.send(tillLayouts)
}

const getTillLayout = async(req: Request,res: Response,next: NextFunction) => {
    const tillLayout = await TillLayout.findById(req.params.tillLayoutId).populate({
        path: "gridItems",
        populate: "product"
    })
    if(!tillLayout){
        res.sendStatus(400)
        return
    }
    res.send(tillLayout)
}

const saveTillLayout = async(req: Request,res: Response,next: NextFunction) => {
    try{
        const tillLayout = new TillLayout({
            name: req.body.name,
            area: req.params.areaId,
            gridItems: req.body.gridItems,
            size: req.body.size
        })
        await tillLayout.save()
        res.sendStatus(200)

    }catch(e){
        console.log(e)
        res.sendStatus(400)
    }
}

const modifyTillLayout = async(req: Request,res: Response,next: NextFunction) => {
    try{
        if(!req.params.tillLayoutId) res.sendStatus(400)
        const till = await TillLayout.findByIdAndUpdate(req.params.tillLayoutId,{
            name: req.body.name,
            area: req.params.areaId,
            gridItems: req.body.gridItems,
            size: req.body.size
        })
        if(!till) throw new Error("no till found")
        res.sendStatus(200)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}


export default {getAllTillLayouts, getTillLayout, saveTillLayout, modifyTillLayout }