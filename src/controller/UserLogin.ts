import {Request,Response} from 'express';

class UserLoginControllerClass {
    UserLogin = (req:Request,res:Response)=>{
        res.status(200).json({
            message : `Welcome ${req.body.result.profile}`,
            result : req.body.result
        })
    }
}

const UserLoginControllerObject = new UserLoginControllerClass();
export default UserLoginControllerObject;