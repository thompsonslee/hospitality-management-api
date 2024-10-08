import express,{Request,Response,NextFunction, Errback} from "express"
import userController from "../controllers/userController"
import passport from "passport";
import authUser from "../helpers/authUser"
import productRouter from "./productRouter";
import operationsRouter from "./operationsRouter"
import User from "../models/User";

const router = express.Router();

router.get("/", (req,res) => {
    console.log(req.session)
    console.log("sending hello")
    res.send("hello")
});
router.get("/dbtest", async(req,res) => {
    const users = await User.find()
    res.json(users)
})
router.get("/sessionActive", authUser,(req,res) => res.sendStatus(200))

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
        if(err)next(err);
        return
    })
    console.log("logout successful")
    res.sendStatus(200)
})

router.get("/loginFail",(req,res) =>{
    res.status(403).send("failed to login")
})
router.get("/loginSuccess",(req,res) => {
    res.send("login succesful")
})


router.use("/product" ,authUser ,productRouter)

router.use(authUser, operationsRouter)


export default router