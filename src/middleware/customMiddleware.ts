import { NextFunction, Request,Response } from "express";

const customMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    req.headers['custom-header'] = JSON.stringify({message:'this is custom header'});
    next();
}

export {customMiddleware};