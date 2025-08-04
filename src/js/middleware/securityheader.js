import helmet from "helmet";
export class HeaderSecurity {
    HelmetSecurity = (req, res, next) => {
        const HelmetMiddleware = helmet({
            noSniff: true,

            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    defaultSrc: ["self"],
                    scriptSrc: ["self"],
                },
            },

            referrerPolicy: {
                policy: 'no-referrer',
            },

            frameguard: {
                action: 'deny'
            },

            crossOriginResourcePolicy: {
                policy: 'same-origin',
            },
            hsts: {
                maxAge: 15552000,
                includeSubDomains: true,
            },
            hidePoweredBy : true,
        })
        return HelmetMiddleware(req,res,next);
    }
}