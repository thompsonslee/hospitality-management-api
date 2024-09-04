import { Request,Response,NextFunction } from "express";
import ProductModel,{Product} from "../models/Product"

const getAllProducts = async(req:Request,res:Response,next: NextFunction) => {
    console.log("getting all products")
    try{
        const products = await ProductModel.find({})
        res.send(products)
    }catch(e){
        return next(e)
    }
}

const getProductByID = async(req:Request,res:Response,next: NextFunction) => {
    try{
        const product: Product | null = await ProductModel.findOne({name: req.params.ID})
        if(!product){
            throw new Error("Product not found")
        }
    }catch(e){
        next(e)
    }
}

const addProduct = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const product = new ProductModel({
            name: req.body.name,
            price: {
                wholesale: req.body.wholesale,
                retail: req.body.retail
            }
        })
        await product.save()
            .then(()=>{res.sendStatus(200)})

    }catch(e){
        return next(e)
    }

}

export default {getAllProducts, getProductByID, addProduct}