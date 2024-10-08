import { Request, Response, NextFunction } from "express"
import UserModel from "../models/User";
import { createDemoData } from "../demoAccountData/createDemoAccountData";
import { Types } from "mongoose";
import getUsersData from "../helpers/getUserData";

const getUsers = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const allUsers = await UserModel.find({}).exec()
        res.json(allUsers)
    } catch(err){
        next(err)
    }
}
const registerUser = async(req:Request,res:Response,next: NextFunction) => {
    console.log(req.body)
    console.log(req.headers)
    try{
        const userData = new UserModel({
            username: req.body.username,
            isDemoAccount: req.body.isDemoAccount
        })
        const user = await UserModel.register(userData, req.body.password)
        if(!user){
            res.sendStatus(500)
            return
        }
        
        if(user.isDemoAccount){
            console.log(user._id)
            console.log("is instanceof objectId?")
            console.log(user._id instanceof Types.ObjectId)
            if(user._id instanceof Types.ObjectId){
                await createDemoData(user._id)
            }
            else(console.log("not an instance of objectId"))
        }
        res.sendStatus(200)

    }catch(error){
        return next(error)
    }
}
const getUserData = async(req:Request,res:Response,next:NextFunction) => {
    if(!req.user){
        res.sendStatus(403)
        return
    }
    const data = await getUsersData(req.user.id)
    res.json(data)
}
export default { getUsers, registerUser,getUserData }