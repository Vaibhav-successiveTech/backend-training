import { NextFunction, Request, Response } from "express";
import { schemaList } from './configurationFile';


class dynamicValidationMiddlewareClass {
    dynamicValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
        const route = req.url;
        const schema = schemaList[String(route.split('/')[2])];
        if (!schema) {
            res.status(401).send('Enter valid route');
            return;
        }
        const result = schema.safeParse(req.body);
        if (!result.success) {
            res.status(400).send('Invalid Object');
            return;
        }
        next();
    }

}
const dynamicValidationMiddlewareObject = new dynamicValidationMiddlewareClass();
export { dynamicValidationMiddlewareObject };