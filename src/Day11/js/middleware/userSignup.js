import {NextFunction, Request,Response} from 'express';
import createError from 'http-errors';
import zod, { email } from 'zod';
import User from '../models/user';
import bcrypt from 'bcrypt';

const UserSignupSchema = zod.object({
    userName : zod.string(),
    email : zod.string().email(),
    password : zod.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/,'Password Should contain lowercase,uppercase and numbers'),
    profile : zod.string()
})

class UserSignupMiddlewareClass {
    UserSignupMiddleware = async (req,res,next)=>{
        const result = UserSignupSchema.safeParse(req.body);
        if(!result.success){
            next(createError(400,result.error));
            return;
        }
        const {userName,email,password,profile} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({userName,email,hashedPassword,profile});
        const dbResult = await newUser.save();
        req.body.result = {};
        req.body.result['userName']= dbResult.userName
        req.body.result['email']= dbResult.email
        req.body.result['profile']= dbResult.profile
        next();
    }   
}

const UserSignupMiddlewareObject = new UserSignupMiddlewareClass();
export default UserSignupMiddlewareObject;