import express,{Request,Response,NextFunction, Errback} from "express"
import userController from "../controllers/userController"
import passport from "passport";
import authUser from "../helpers/authUser"
import productRouter from "./productRouter";
import userRouter from "./userRouter"

const router = express.Router();
router.use((req,res,next) => {
    console.log("using apiRouter")
    next()
})
router.get("/", (req,res) => {
    res.send("hello")
});

router.get("/users", authUser, userController.getUsers)

router.post("/register", userController.registerUser)

router.post("/login", passport.authenticate('local', {
    failureRedirect:"/loginFail",
    successRedirect:"/loginSuccess"
}),(err:Errback,req:Request,res:Response,next:NextFunction) =>{
    next(err)
})

router.post("/logout", (req,res,next) => {
    req.logout((err) => {
        if(err) return next(err)
        res.send("logout succesful")
    })
})

router.get("/loginFail",(req,res) =>{
    res.send("failed to login")
})
router.get("/loginSuccess",(req,res) =>{
    res.send("login succesful")
})

router.use("/product" ,authUser ,productRouter)

router.use("/user/:id",authUser ,userRouter)

export default router