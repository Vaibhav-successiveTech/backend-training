import { Request, Response, NextFunction } from 'express';

class validateQueryParamClass {
    validateQueryParam = (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        if (isNaN(Number(id))) {
            res.status(400).json({
                message: 'Invalid Params'
            })
            return;
        }
        next();
    }
}

const validateParamsObject = new validateQueryParamClass();
export { validateParamsObject };