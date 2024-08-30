import Area from "../models/Area";
import ProductInstance from "../models/ProductInstances";
import { Request,Response,NextFunction } from "express";

const getAllProductInstances = async(req:Request,res:Response,next: NextFunction) => {
    const userAreaObjects = await Area.find({user: req.user}).select({"_id": 1})
    const userAreaIds = userAreaObjects.map(object => object._id)

    const productInstances = await ProductInstance.find({area: {$in: userAreaIds}}).populate("product")
    res.send(productInstances)
}
const getAreaProductInstances = async(req:Request,res: Response,next:NextFunction) => {
    const productInstances = await ProductInstance.find({area: req.params.areaId}).populate("product")
    res.json(productInstances)
}
export default {getAllProductInstances,getAreaProductInstances}