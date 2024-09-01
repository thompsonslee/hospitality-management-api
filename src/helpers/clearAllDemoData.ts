import { Request, Response, NextFunction } from "express"
import Area from "../models/Area"
import ProductInstance from "../models/ProductInstances"
import TillLayout from "../models/TillLayout"
import Transaction from "../models/Transaction"
import User from "../models/User"
import { Types } from "mongoose"

const clearAllDemoAccountData = async(req:Request,res:Response,next: NextFunction) => {
    try{
    const users = await User.find({isDemoAccount: true}).exec()

    await Promise.all([...users.map(user => clearUserData(user._id))])

    res.sendStatus(200)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}

const clearUserData = async(userId: Types.ObjectId | unknown) => {

    const [areas,transactions] = await Promise.all(
        [
            Area.find({user: userId}, '_id').exec(),
            Transaction.find({user: userId},'_id').exec()
        ]
    )

    const areaIds = areas.map(area => area._id)
    const transactionIds = transactions.map(transaction => transaction._id)

    await Promise.all(
        [
            ProductInstance.deleteMany({area: {$in: areaIds}}).exec(),
            TillLayout.deleteMany({area: {$in: areaIds}}).exec(),
            Area.deleteMany({_id:{$in:areaIds}}),
            Transaction.deleteMany({_id:{$in:transactionIds}}),
            User.findByIdAndDelete(userId)
        ]
    )
    

}

export default clearAllDemoAccountData