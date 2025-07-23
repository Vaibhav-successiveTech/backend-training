import { NextFunction, Request, Response } from 'express';

class loggingMiddelwareClass {
    loggingMiddelware = (req: Request, res: Response, next: NextFunction) => {
        const url = req.originalUrl;
        const method = req.method;
        const time = new Date().toLocaleTimeString();
        const protocol = req.protocol;
        const host = req.host;

        console.log(
            '\n',
            'url:', `${protocol}://${host}${url}`, '\n',
            'method:', method, '\n',
            'time:', time, '\n',
        )
        next();
    }
}

const loggingMiddelwareObject = new loggingMiddelwareClass();
export { loggingMiddelwareObject };