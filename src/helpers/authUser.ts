import {Request, Response, NextFunction } from "express";

export default function authUser(req:Request,res:Response,next:NextFunction){

    if(req.isAuthenticated()){
        return next()
    }
    res.sendStatus(403)
}