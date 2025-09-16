import createError from 'http-errors';

class ErrorCodes {
    Error400 = (req, res, next) => {
        next(createError(400, 'Bad Request'));
    }
    Error401 = (req, res, next) => {
        next(createError(401, 'Unauthorized'));
    }
    Error403 = (req, res, next) => {
        next(createError(403, 'Forbidden'));
    };

    Error404 = (req, res, next) => {
        next(createError(404, 'Not Found'));
    };

    Error405 = (req, res, next) => {
        next(createError(405, 'Method Not Allowed'));
    };

    Error429 = (req, res, next) => {
        next(createError(429, 'Too Many Requests'));
    };

    Error500 = (req, res, next) => {
        next(createError(500, 'Internal Server Error'));
    };

    Error503 = (req, res, next) => {
        next(createError(503, 'Service Unavailable'));
    };
}

const ErrorCodeObject = new ErrorCodes();
export default ErrorCodeObject;