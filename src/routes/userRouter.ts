import express, { Request,Response,NextFunction } from "express"

const userRouter = express.Router()

userRouter.use((req: Request,res:Response,next:NextFunction) =>{
    console.log("accessing userRouter")
    res.send(req.user)

})