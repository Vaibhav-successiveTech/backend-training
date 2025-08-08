class middlewareChainingClass {
    middleware1 = (req, res, next) => {
        if (!req.body) req.body = {};
        req.body.middleware1 = 'this is first middleware';
        next();
    }

    middleware2 = (req, res, next) => {
        req.body.middleware2 = 'this is second middleware';
        next();
    }
}

const middlewareChainingObject = new middlewareChainingClass();

export { middlewareChainingObject };