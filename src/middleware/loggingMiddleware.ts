import {NextFunction, Request,Response} from 'express';

const loggingMiddelware = (req:Request,res:Response,next:NextFunction) =>{
    const url = req.url;
    const method = req.method;
    const timeStr = String(req.headers['x-request-time']);
    const time = new Date(timeStr).getTime();
    console.log(
        'url:', url , '\n',
        'method:', method , '\n',
        'time:', time , '\n',
    )
    next();
}

export {loggingMiddelware};