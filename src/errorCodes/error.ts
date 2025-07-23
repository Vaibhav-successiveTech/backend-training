import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

class ErrorCodes {
    Error400 = (req: Request, res: Response, next: NextFunction) => {
        next(createError(400, 'Bad Request'));
    }
    Error401 = (req: Request, res: Response, next: NextFunction) => {
        next(createError(401, 'Unauthorized'));
    }
    Error403 = (req: Request, res: Response, next: NextFunction) => {
        next(createError(403, 'Forbidden'));
    };

    Error404 = (req: Request, res: Response, next: NextFunction) => {
        next(createError(404, 'Not Found'));
    };

    Error405 = (req: Request, res: Response, next: NextFunction) => {
        next(createError(405, 'Method Not Allowed'));
    };

    Error429 = (req: Request, res: Response, next: NextFunction) => {
        next(createError(429, 'Too Many Requests'));
    };

    Error500 = (req: Request, res: Response, next: NextFunction) => {
        next(createError(500, 'Internal Server Error'));
    };

    Error503 = (req: Request, res: Response, next: NextFunction) => {
        next(createError(503, 'Service Unavailable'));
    };
}

const ErrorCodeObject = new ErrorCodes();
export default ErrorCodeObject;