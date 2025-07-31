import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

class SignStringMiddlewareClass {
    SignStringMiddleware = (req: Request, res: Response, next: NextFunction) => {
        const token = jwt.sign(req.body, 'abcd', { expiresIn: '1h' });
        req.body.token = token;
        next();
    }
}

class VerifyStringMiddlewareClass {
    VerifyStringMiddleware = (req: Request, res: Response, next: NextFunction) => {
        const token = String(req.headers['authorization']);
        jwt.verify(token, 'abcd', (err, data) => {
            if (err) {
                res.send(err);
                return;
            }
            if (!req.body) req.body = {};
            req.body.stringData = data;
            next();
        })
    }
}

const SignStringMiddlewareObject = new SignStringMiddlewareClass();
const VerifyStringMiddlewareObject = new VerifyStringMiddlewareClass();

export { SignStringMiddlewareObject, VerifyStringMiddlewareObject };