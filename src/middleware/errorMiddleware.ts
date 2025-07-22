import {Request, Response, NextFunction} from 'express';
import createError from 'http-errors';

const ErrorMiddleWare = (req:Request,res:Response,next:NextFunction)=>{
    const {name,age,email}:{name:string,age:number,email:string} = req.body;


    if(!name || !age || !email){
        next(createError(400,'Invalid Feilds'));
    }


    res.status(201).send('User Created');
}

export default ErrorMiddleWare;