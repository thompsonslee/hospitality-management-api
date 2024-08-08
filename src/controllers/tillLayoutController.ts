import { Request,Response,NextFunction } from "express";
import TillLayout from "../models/TillLayout";

const getAllTillLayouts = async(req: Request,res: Response,next: NextFunction) => {
    res.sendStatus(500)
}

const getTillLayout = async(req: Request,res: Response,next: NextFunction) => {
    const tillLayout = TillLayout.findById(req.params.tillLayoutId).populate("Product")
    if(!tillLayout){
        res.sendStatus(400)
        return
    }
    res.send(tillLayout)
}

const saveTillLayout = async(req: Request,res: Response,next: NextFunction) => {
    try{
    console.log(req.body)
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


export default {getAllTillLayouts, getTillLayout, saveTillLayout }