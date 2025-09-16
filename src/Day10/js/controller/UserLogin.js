import {Request,Response} from 'express';

class UserLoginControllerClass {
    UserLogin = (req,res)=>{
        res.status(200).json({
            message : `Welcome ${req.body.result.userName}`,
            result : req.body.result
        })
    }
}

const UserLoginControllerObject = new UserLoginControllerClass();
export default UserLoginControllerObject;