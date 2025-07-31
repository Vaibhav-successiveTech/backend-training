import { NextFunction, Request, Response } from "express";

class errorMiddlewareClass {
    errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
        if (err) {
            res.status(400).send(err.message);
        }
    }
}

const errorMiddlewareObject = new errorMiddlewareClass();
export { errorMiddlewareObject }