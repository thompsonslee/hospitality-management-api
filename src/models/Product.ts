import { model, Schema, Document } from "mongoose";

export interface Product extends Document{
    name: String,
    price: {
        wholesale: number,
        retail: number
    }
}

const ProductSchema = new Schema({
    name: {type: String},
    price: {
        wholesale: {type: Number},
        retail: {type: Number}
    }
})

const Product = model<Product>("Product",ProductSchema)