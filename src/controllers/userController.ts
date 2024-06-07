import { Request, Response, NextFunction } from "express"
import UserModel from "../models/UserModel";

const getUsers = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const allUsers = await UserModel.find({}).exec()
        res.json(allUsers)
    } catch(err){
        next(err)
    }
}
const createUser = (req:Request,res:Response,next: NextFunction) => {
    console.log(req.body)
    const user = new UserModel({
        username: req.body.username,
        password: req.body.password
    })
    user.save()
        .then(() =>{
            res.sendStatus(200)
        }).catch((error) => {
            next(error)
        })

}

export default { getUsers, createUser }