import mongoose, { Types } from "mongoose";
import { createAreas } from "./createAreas";
import { createProductInstances } from "./createProductInstances";
import { createTillLayouts } from "./createTillLayouts";
import { createTransactions } from "./createTransactions";
import Area from "../models/Area";
import ProductInstance from "../models/ProductInstances";
import TillLayout from "../models/TillLayout";
import Transaction from "../models/Transaction";

export const createDemoData = async(userId: Types.ObjectId) => {
    const [storageId, mainBarId, sideBarId] = 
        [
            new mongoose.Types.ObjectId(),
            new mongoose.Types.ObjectId(),
            new mongoose.Types.ObjectId()
        ] 
    const [
        areas,
        productInstances,
        tillLayouts,
        transactions
    ] = [
        createAreas(userId,storageId,mainBarId,sideBarId),
        createProductInstances(storageId,mainBarId,sideBarId),
        createTillLayouts(mainBarId,sideBarId),
        createTransactions(userId,storageId,mainBarId,sideBarId)
    ]
    await Promise.all([
        Area.insertMany(areas),
        ProductInstance.insertMany(productInstances),
        TillLayout.insertMany(tillLayouts),
        Transaction.insertMany(transactions)
    ])
}