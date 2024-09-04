import { model, Schema} from "mongoose";

export interface Product{
    name: String,
    price: {
        wholesale: number,
        retail: number
    }
}
const ProductSchema = new Schema<Product>({
    name: {type: String},
    price: {
        wholesale: {type: Number},
        retail: {type: Number}
    }
})

const ProductModel = model<Product>("Product",ProductSchema)

export default ProductModel