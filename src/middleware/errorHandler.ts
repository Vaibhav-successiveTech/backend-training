import { NextFunction, Request, Response } from "express";

const errorMiddleware = (err : any,req:Request,res:Response, next:NextFunction)=>{
    if(err){
        res.status(400).send(err.message);
    }
}

export {errorMiddleware}