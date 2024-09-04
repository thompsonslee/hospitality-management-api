import { model, Schema, Document, ObjectId} from "mongoose";

export interface Transaction{
    type: "buy" | "Sell",
    cost: number,
    user: ObjectId,
    area: ObjectId,
    Date: Date
}

const TransactionSchema = new Schema<Transaction>({
    type: {type: String, enum:["buy","sell"]},
    cost: {type: Number},
    user: {type: Schema.ObjectId, ref: "User"},
    area: {type: Schema.ObjectId, ref: "Area"},
    Date: {type: Date, default: Date.now()}
})

const Transaction = model<Transaction>("Transaction", TransactionSchema)

export default Transaction