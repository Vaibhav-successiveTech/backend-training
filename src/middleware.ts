import zod from 'zod';

import { Request, Response, NextFunction } from 'express';


const reqSchema = zod.object({
    name : zod.string().min(3).max(10),
    age : zod.number().min(18),
    email : zod.string().email('Invalid Email'),
    password : zod.string().min(3).max(20).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/)

})

const validateUser = (req : Request,res : Response,next:NextFunction)=>{
    const result = reqSchema.safeParse(req.body);
    if(!result.success){
        console.log(result);
        return res.status(400).json({
            message:'Invalid Input',
            error : JSON.stringify(result)
        })
    }
    next();
}

export {validateUser};