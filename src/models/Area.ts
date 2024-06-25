import { model, Schema, Document, ObjectId } from "mongoose";

export interface Area extends Document{
    user: ObjectId,
}

const AreaSchema = new Schema({
    user: {type: Schema.ObjectId, ref: "User"},
})

const Area = model<Area>("Inventory",AreaSchema)

export default Area