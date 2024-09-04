import { Types } from "mongoose"
import { Product } from "../models/Product"
import User from "../models/User"
import Area from "../models/Area"
import TillLayout from "../models/TillLayout"
import ProductInstance from "../models/ProductInstances"

interface UserData{
    name: string,
    userAreaAmount: number,
    userTillAmount: number
    totalInstanceValue:{
        wholesale: number,
        retail: number
    }
}



const getUserData = async(userId: Types.ObjectId): Promise<UserData> =>  {
    const user = await User.findById(userId)
    if(!user) throw new Error("no user found")
    const areas = (await Area.find({user: user?._id}, '_id')).map(area => area._id)

    const tillCount = await TillLayout.countDocuments({area: {$in: areas}})

    const allProductInstances = await ProductInstance.find({area:{$in: areas}}).populate<{product: Product}>("product")

    console.log(allProductInstances)

    const wholesale:number = allProductInstances.reduce((curr,next) => curr + next.product.price.wholesale, 0)
    const retail: number = allProductInstances.reduce((curr,next) => curr+ next.product.price.wholesale, 0)
    return{
        name: user.username,
        userAreaAmount: areas.length,
        userTillAmount: tillCount,
        totalInstanceValue: {
            wholesale: wholesale,
            retail: retail
        }
    }
}

export default getUserData