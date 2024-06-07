import express, {Express, Request, Response, NextFunction} from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./routes/apiRouter"

dotenv.config()

const port = 3000;

const mongoDB_URI = process.env.mongoDB_URI

async function mongoDB_connect(){
    if(!mongoDB_URI){
        console.log("No mongoDB URI")
        return
    }
    await mongoose.connect(mongoDB_URI).catch((e) => console.log(e))
}

mongoose.connection.on('error', err => {
    console.log(err)
  });

mongoDB_connect()

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("an error occured")
    res.status(500).send(error.message)
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", router)

app.use(errorHandler)

app.listen(port,() =>`Server is running at http://localhost:${port}`)