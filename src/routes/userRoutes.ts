import { Request,Response } from "express";

const SignInUserHandler = (req:Request,res:Response)=>{
    res.status(201).json({
        token : req.body.token
    });
}

const VerifyUserHandler = (req:Request,res:Response)=>{
    res.status(200).json({
        status : 'User Authorized',
        data : req.body.userData
    })
}

export {SignInUserHandler,VerifyUserHandler};