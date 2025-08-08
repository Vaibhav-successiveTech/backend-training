class customMiddlewareClass {
    customMiddleware = (req, res, next) => {
        req.headers['custom-header'] = JSON.stringify({ message: 'this is custom header' });
        next();
    }

}
const customMiddlewareObject = new customMiddlewareClass();
export { customMiddlewareObject };