import { NextFunction, Request, Response } from "express";
import createError from 'http-errors';

const validateParams = (req:Request,res:Response,next: NextFunction)=>{
    const {id} = req.params;
    const num = parseInt(id);
    if(isNaN(num)){
        next(createError(400,'Invalid Params'));
        return;
    }

    res.status(200).json({
        message : 'ok'
    })

}

export default validateParams;