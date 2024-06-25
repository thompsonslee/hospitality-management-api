import { model, Schema, Document, ObjectId} from "mongoose";

export interface ProductInstance extends Document{
    product: ObjectId
    area: ObjectId
    quantity: number
}

const ProductInstanceSchema = new Schema({
    product: {type: Schema.ObjectId, ref: "Product"},
    area: {type: Schema.ObjectId, ref: "Area"},
    quantity: {type: Number}
})

const ProductInstance = model<ProductInstance>("ProductInstance", ProductInstanceSchema)

export default ProductInstance