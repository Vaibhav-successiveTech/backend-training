import { Request, Response } from 'express';
class UserControllerClass {
    UserController = (req: Request, res: Response) => {
        res.status(201).json({
            message : 'User created',
            result : req.body.result
        })
    }
}

const UserControllerObject = new UserControllerClass();
export default UserControllerObject;