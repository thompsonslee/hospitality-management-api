import express from "express"
import userController from "../controllers/userController"

const router = express.Router();

router.get("/", (req,res) => {
    res.send("hello")
});

router.get("/users", userController.getUsers)

router.post("/users", userController.createUser)

export default router