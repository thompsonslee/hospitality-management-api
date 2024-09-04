import { model, Schema,  ObjectId} from "mongoose";

interface ProductInstance{
    product: ObjectId
    area: ObjectId
    quantity: number
}

const ProductInstanceSchema = new Schema<ProductInstance>({
    product: {type: Schema.ObjectId, ref: "Product"},
    area: {type: Schema.ObjectId, ref: "Area"},
    quantity: {type: Number}
})

const ProductInstance = model<ProductInstance>("ProductInstance", ProductInstanceSchema)

export default ProductInstance