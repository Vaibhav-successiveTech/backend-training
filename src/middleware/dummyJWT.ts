import jwt from 'jsonwebtoken';
import {NextFunction, Request,Response} from 'express';

const SignString = (req:Request,res:Response, next:NextFunction)=>{
    const token = jwt.sign(req.body,'abcd',{expiresIn:'1h'});
    req.body.token = token;
    next();
}   

const VerifyString = (req:Request,res:Response,next:NextFunction)=>{
    const token = String(req.headers['authorization']);
    jwt.verify(token,'abcd',(err,data)=>{
        if(err){
            res.send(err);
            return;
        }
        if(!req.body)req.body = {};
        req.body.stringData = data;
        next();
    })
}

export {SignString,VerifyString};