import productController from "../controllers/productController"
import express from "express"

const productRouter = express.Router()

productRouter.use((req,res,next) =>{
    console.log("using product router")
    return next()
})

productRouter.get("/", productController.getAllProducts)

productRouter.post("/",productController.addProduct)

productRouter.post("/:id", productController.getProductByID)



export default productRouter