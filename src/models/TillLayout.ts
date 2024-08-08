import { model, Schema, Document, ObjectId} from "mongoose";

interface GridItem{
    product: ObjectId,
    row: number,
    column: number
}

export interface TillLayout{
    _id: ObjectId,
    name: string,
    area: string,
    gridItems: GridItem[]
    size: number
}

const TillLayoutSchema = new Schema({
    name: {type: String},
    area: {type: Schema.ObjectId, ref: "Area"},
    gridItems: [{type: {
        product:{type: Schema.ObjectId, ref:"Product"},
        row:{type: Number},
        column:{type: Number}
    }}],
    size: {type: Number}
})

const TillLayout = model<TillLayout>("TillLayout", TillLayoutSchema)

export default TillLayout