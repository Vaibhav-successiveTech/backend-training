import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

class ErrorMiddleWareClass {
    ErrorMiddleWare = (req, res, next) => {
        const { name, age, email } = req.body;


        if (!name || !age || !email) {
            next(createError(400, 'Invalid Feilds'));
        }


        res.status(201).send('User Created');
    }

}
const ErrorMiddleWareObject = new ErrorMiddleWareClass();
export default ErrorMiddleWareObject;