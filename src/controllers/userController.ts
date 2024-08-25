import { Request, Response, NextFunction } from "express"
import UserModel from "../models/User";
import passport from "passport";

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
        const user = new UserModel({
            username: req.body.username
        })
        UserModel.register(user, req.body.password, (err) => {
            if(err){
                console.log(err)
                res.sendStatus(500)
            }
            else{
                res.sendStatus(200)
            }
        })

    }catch(error){
        return next(error)
    }
}
export default { getUsers, registerUser }