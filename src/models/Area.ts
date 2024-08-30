import { model, Schema, Document, ObjectId } from "mongoose";

export interface Area extends Document{
    name: String
    user: ObjectId,
}

const AreaSchema = new Schema({
    name: {type: String},
    user: {type: Schema.ObjectId, ref: "User"},
})

const Area = model<Area>("Area",AreaSchema)

export default Area