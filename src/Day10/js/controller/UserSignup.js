import {Request, Response} from 'express';

class UserSignupControllerClass {
    UserSignup = (req,res)=>{
        res.status(201).json({message:'User Created',...req.body.result})
    }
}

const UserSignupControllerObject = new UserSignupControllerClass();
export default UserSignupControllerObject;