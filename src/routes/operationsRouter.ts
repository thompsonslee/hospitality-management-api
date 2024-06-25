import express from "express"
import operationsController from "../controllers/operationsController"

const router = express.Router()

//get inventorys
//get inventory/id
//post inventory
//get transactions

//order items
//sell items
//transfer from inventory to inventory



router.get("/area", operationsController.getAllAreas)

router.get("/area/:id" , operationsController.getArea)

router.post("/area", operationsController.postArea)

router.post("/area/:id/orderItems",operationsController.orderItems)

router.get("/transaction", operationsController.getAllTransactions)








export default router