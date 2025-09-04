import { NextFunction, Request, Response } from "express";

class customMiddlewareClass {
    customMiddleware = (req: Request, res: Response, next: NextFunction) => {
        req.headers['custom-header'] = JSON.stringify({ message: 'this is custom header' });
        next();
    }

}
const customMiddlewareObject = new customMiddlewareClass();
export { customMiddlewareObject };