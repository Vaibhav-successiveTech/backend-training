import {Request, Response, NextFunction} from 'express';
import createError from 'http-errors';
import User from '../models/userSchema'
import z from 'zod';

const UserObject = z.object({
    firstName : z.string(),
    lastName : z.string(),
    email : z.string().email(),
    age : z.number().min(18)
});

class UserMiddlewareClass{
    UserMiddleware = async (req:Request,res:Response,next:NextFunction)=>{
        const {firstName,lastName,email,age} = req.body;
        const schemaResult = UserObject.safeParse({firstName,lastName,email,age});
        if(!schemaResult.success){
            next(createError(400,'Invalid Request Body'));
        }
        const user = new User({firstName,lastName,email,age});
        const result = await user.save();
        req.body.result = result;
        next();
    }   
}

const UserMiddlewareObject = new UserMiddlewareClass();
export default UserMiddlewareObject;