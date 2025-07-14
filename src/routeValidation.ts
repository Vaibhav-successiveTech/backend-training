import {Request,Response,NextFunction} from 'express';

const validateQueryParam = (req:Request,res:Response,next : NextFunction) =>{
    const {id} = req.params;
    if(isNaN(Number(id))){
        res.status(400).json({
            message : 'Invalid Params'
        })
    }else next();
}


export {validateQueryParam};