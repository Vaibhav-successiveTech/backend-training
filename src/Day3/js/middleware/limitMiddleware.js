let obj = { cnt: 0 };

class limitMiddlewareClass {
    limitMiddleware = (req, res, next) => {

        const limitOfRequest = 3;

        obj.cnt += 1;

        if (obj.cnt > limitOfRequest) {

            setTimeout(() => {
                obj.cnt = 0;
                console.log('cnt is zero');
            }, 2000);

            res.status(401).send(`limit reached ${obj.cnt}`);

            return;
        }

        if (!req.body) req.body = {};

        req.body.limit = obj.cnt;

        next();
    }
}

const limitMiddlewareObject = new limitMiddlewareClass();

export { limitMiddlewareObject };