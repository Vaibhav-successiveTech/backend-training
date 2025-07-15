import { NextFunction, Request,Response } from "express";

const middleware1 = (req:Request,res:Response,next:NextFunction)=>{
    if(!req.body)req.body = {};
    req.body.middleware1 = 'this is first middleware';
    next();
}

const middleware2 = (req:Request,res:Response,next:NextFunction)=>{
    req.body.middleware2 = 'this is second middleware';
    next();
}

export {middleware1,middleware2};