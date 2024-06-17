import { model, Schema, Document, ObjectId} from "mongoose";

export interface ProductInstance extends Document{
    Product: ObjectId
    quantity: number
}

const ProductInstanceSchema = new Schema({
    product: {type: Schema.ObjectId, ref: "Product"},
    quantity: {type: Number}
})

const ProductInstance = model<ProductInstance>("ProductInstance", ProductInstanceSchema)

export default ProductInstance