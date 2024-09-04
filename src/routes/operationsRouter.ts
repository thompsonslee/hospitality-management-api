import express from "express"
import operationsController from "../controllers/operationsController"
import TillLayoutController from "../controllers/tillLayoutController"
import tillLayoutController from "../controllers/tillLayoutController"
import productInstanceController from "../controllers/productInstanceController"
import clearAllDemoData from "../helpers/clearAllDemoData"
import userController from "../controllers/userController"

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

router.get("/tillLayout", TillLayoutController.getAllTillLayouts)

router.get("/area/:areaId/tillLayout/:tillLayoutId", tillLayoutController.getTillLayout)

router.post("/area/:areaId/tillLayout", TillLayoutController.saveTillLayout)

router.put("/area/:areaId/tillLayout/:tillLayoutId", TillLayoutController.modifyTillLayout)

router.delete("/area/:areaId/tillLayout/:tillLayoutId", TillLayoutController.deleteTillLayout)

router.get("/transaction", operationsController.getAllTransactions)

router.get("/transactions/:page", operationsController.getTenTransactions)

router.get("/productInstances", productInstanceController.getAllProductInstances)

router.get("/area/:areaId/productInstances", productInstanceController.getAreaProductInstances)

router.get("/userData", userController.getUserData)

router.delete("/allDemoData",clearAllDemoData)










export default router