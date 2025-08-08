import { Request, Response, NextFunction, Router } from 'express';
import createError from 'http-errors';


class AsyncErrorHandlerClass {
    AsyncErrorHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('Invalid url');
                }, 2000);
            })
        } catch (err) {
            next(createError(500, 'Failed to fetch data'));
        }
    }
}

const AsyncErrorHandlerObject = new AsyncErrorHandlerClass();
export default AsyncErrorHandlerObject;