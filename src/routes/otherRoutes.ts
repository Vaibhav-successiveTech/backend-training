import { Request, Response, NextFunction } from "express";

const AddStrigHandler = (req: Request, res: Response) => {
    res.status(200).json({
        token: req.body.token
    });
}

const VerifyStringHandler = (req: Request, res: Response) => {
    res.status(200).json({
        string: req.body.stringData
    });
}

const loggingMiddelwareHandler = (req: Request, res: Response) => {
    res.status(200).send('Consoled URL,method and timeStamp');
}

const middlewareChainingHandler = (req: Request, res: Response) => {
    res.status(200).json({
        message1: req.body.middleware1,
        message2: req.body.middleware2,
    });
}

const customMiddlewareHandler = (req: Request, res: Response) => {
    res.status(200).send(req.headers);
}

const limitMiddlewareHandler = (req: Request, res: Response) => {
    res.status(200).send(`Request Fullfilled ${req.body.limit}`);
}

const errorMiddlewareHandler = (req: Request, res: Response, next: NextFunction) => {
    try {
        throw new Error('Error Occured in routes');
    } catch (err) {
        next(err);
    }
}

export { AddStrigHandler, VerifyStringHandler, loggingMiddelwareHandler, middlewareChainingHandler, customMiddlewareHandler, limitMiddlewareHandler, errorMiddlewareHandler };