import { model, Schema, Document, ObjectId} from "mongoose";

export interface Transaction extends Document{
    type: "buy" | "Sell",
    quantity: number,
    product: ObjectId
    user: ObjectId,
    area: ObjectId,
    Date: Date
}

const TransactionSchema = new Schema({
    type: {type: String, enum:["buy","sell"]},
    quantity: {type: Number},
    product: {type: Schema.ObjectId, ref: "Product"},
    user: {type: Schema.ObjectId, ref: "User"},
    area: {type: Schema.ObjectId, ref: "Area"},
    Date: {type: Date, default: Date.now()}
})

const Transaction = model<Transaction>("Transaction", TransactionSchema)

export default Transaction