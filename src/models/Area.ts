import { model, Schema, Document, ObjectId } from "mongoose";

export interface Area extends Document{
    user: ObjectId,
    products: Array<ObjectId>
}

const AreaSchema = new Schema({
    user: {type: Schema.ObjectId, ref: "User"},
    products: [{type:Schema.ObjectId, ref:"ProductInstances" }]
})

const Area = model<Area>("Inventory",AreaSchema)

export default Area