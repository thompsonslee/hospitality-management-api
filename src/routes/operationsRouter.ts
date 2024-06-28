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

router.get("/area/:areaId" , operationsController.getArea)

router.post("/area", operationsController.postArea)

router.post("/area/:areaId/orderItems",operationsController.orderItems)

router.post("/area/:areaId/sellItems",operationsController.sellItems)

router.post("/area/:areaId/transfer/:area2Id", operationsController.transferItems)

router.get("/transaction", operationsController.getAllTransactions)








export default router