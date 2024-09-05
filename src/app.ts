import express, {Express, Request, Response, NextFunction} from "express"
import session from "express-session"
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./routes/apiRouter"
import passportConfig from "./helpers/passport"
import passport from "passport"
import cors from "cors"
import helmet from "helmet"


dotenv.config()

const port = 3000;
const mongoDB_URI = process.env.mongoDB_URI
const clientOrigin = process.env.client_origin

async function mongoDB_connect(){
    if(!mongoDB_URI){
        console.log("No mongoDB URI")
        return
    }
    await mongoose.connect(mongoDB_URI,{
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 5000,
    })
    .then(() => console.log("mongoDB connection succesful"))
    .catch((e) => console.log(e))
}

mongoose.connection.on('error', err => {
    console.log("mongoDB connection error")
    console.log(err)
  });

mongoDB_connect()

const errorHandler = (error: Error, req: Request, res:Response, next: NextFunction) => {
    console.log("an error occured")
    console.log(error)
    res.status(500).send(error.message)
}

const app = express();


app.use(express.json());
app.use(helmet())
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: clientOrigin,
    credentials: true
}))

if(!process.env.secret_key){
    throw new Error("no secret key for session found")
}
app.use(session({
    secret: process.env.secret_key,
    cookie:{
        maxAge: 86400000, //24 hours
        secure: false
    },
    resave: false,
    saveUninitialized: false
    //ToDo set up session storage
}))
passportConfig(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use("/", router)

app.use(errorHandler)

app.listen(port,() =>`Server is running at http://localhost:${port}`)