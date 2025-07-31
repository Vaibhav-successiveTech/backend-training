import { NextFunction, Request, Response } from "express";
import createError from 'http-errors';

class validateParamsClass {
    validateParams = (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const num = parseInt(id);
        if (isNaN(num)) {
            next(createError(400, 'Invalid Params'));
            return;
        }

        res.status(200).json({
            message: 'ok'
        })

    }

}
const validateParamsObject = new validateParamsClass();
export default validateParamsObject;