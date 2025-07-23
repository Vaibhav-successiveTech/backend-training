import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export const Error400 = (req: Request, res: Response, next: NextFunction) => {
    return next(createError(400, 'Bad Request'));
}

export const Error401 = (req: Request, res: Response, next: NextFunction) => {
    next(createError(401, 'Unauthorized'));
};


export const Error403 = (req: Request, res: Response, next: NextFunction) => {
    next(createError(403, 'Forbidden'));
};

export const Error404 = (req: Request, res: Response, next: NextFunction) => {
    next(createError(404, 'Not Found'));
};

export const Error405 = (req: Request, res: Response, next: NextFunction) => {
    next(createError(405, 'Method Not Allowed'));
};

export const Error429 = (req: Request, res: Response, next: NextFunction) => {
    next(createError(429, 'Too Many Requests'));
};

export const Error500 = (req: Request, res: Response, next: NextFunction) => {
    next(createError(500, 'Internal Server Error'));
};

export const Error503 = (req: Request, res: Response, next: NextFunction) => {
    next(createError(503, 'Service Unavailable'));
};
