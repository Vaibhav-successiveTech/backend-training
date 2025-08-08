class errorMiddlewareClass {
    errorMiddleware = (err, req, res, next) => {
        if (err) {
            res.status(400).send(err.message);
        }
    }
}

const errorMiddlewareObject = new errorMiddlewareClass();
export { errorMiddlewareObject }