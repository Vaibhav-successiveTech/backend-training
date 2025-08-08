import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class VerifyUserMiddlewareClass {
    SignInUser = (req: Request, res: Response, next: NextFunction) => {
        const user = req.body;

        const token = jwt.sign({ user }, "abcd", { expiresIn: '1h' });
        if (!token) {
            res.send('Error while making Token');
            return;
        }
        req.body.token = token;
        next();
    }

    VerifyUser = (req: Request, res: Response, next: NextFunction) => {

        const headers: string | string[] | undefined = req.headers['authorization'];

        const token = headers ? (typeof (headers) == 'object' ? headers[0] : headers) : 'not defined';


        jwt.verify(token, "abcd", (err, data) => {
            if (err) {
                res.status(401).send(err);
                return;
            }

            if (!req.body) req.body = {};
            req.body.userData = data;
            next();
        })
    }
}

const VerifyUserMiddlewareObject = new VerifyUserMiddlewareClass();
export {  VerifyUserMiddlewareObject };