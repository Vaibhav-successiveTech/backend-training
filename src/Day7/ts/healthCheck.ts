import {Request, Response} from 'express';
class healthCheckClass {
    healthCheckMiddleware = (req:Request,res:Response)=>{
        res.status(200).json({
            status: 'ok',
            uptime : process.uptime()
        })
    }
}

const healthCheckObject = new healthCheckClass();
export default healthCheckObject;