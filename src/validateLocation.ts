import {Request,Response,NextFunction} from 'express';
import axios from 'axios'

const validateLocation = async (req:Request,res:Response, next : NextFunction)=>{
    const location = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    try{
        
        const response = await axios.get(`http://ip-api.com/json/${location}`);
        req.headers.locationdata = response.data;
        next();

    }catch(err){
        res.json({
            error : err
        })
    }

}

export {validateLocation};