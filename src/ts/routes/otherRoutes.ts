import { Router } from "express"
import { customMiddlewareObject } from "../middleware/customMiddleware";
import { AddStrigHandlerObject, customMiddlewareHandlerObject, dataSeedingControllerObject, limitMiddlewareHandlerObject, loggingMiddelwareHandlerObject, middlewareChainingHandlerObject, VerifyStringHandlerObject } from "../controllers/OtherController";
import { SignStringMiddlewareObject, VerifyStringMiddlewareObject } from "../middleware/dummyJWT";
import { limitMiddlewareObject } from "../middleware/limitMiddleware";
import { loggingMiddelwareObject } from "../middleware/loggingMiddleware";
import { middlewareChainingObject } from "../middleware/middlewareChaining";

const customMiddlewareRouter = Router();
customMiddlewareRouter.get('/customMiddleware', customMiddlewareObject.customMiddleware, customMiddlewareHandlerObject.customMiddlewareHandler);

const dummyMiddlewareRouter = Router();
dummyMiddlewareRouter.post('/AddString', SignStringMiddlewareObject.SignStringMiddleware, AddStrigHandlerObject.AddStrigHandler);
dummyMiddlewareRouter.post('/VerifyString', VerifyStringMiddlewareObject.VerifyStringMiddleware, VerifyStringHandlerObject.VerifyStringHandler);

const limitMiddlewareRouter = Router();
limitMiddlewareRouter.get('/limitMiddleware/', limitMiddlewareObject.limitMiddleware, limitMiddlewareHandlerObject.limitMiddlewareHandler);

const loggingMiddelwareRouter = Router();
loggingMiddelwareRouter.get('/logging', loggingMiddelwareObject.loggingMiddelware, loggingMiddelwareHandlerObject.loggingMiddelwareHandler);

const middlewareChainingRouter = Router();
middlewareChainingRouter.get('/middlewareChaining', middlewareChainingObject.middleware1, middlewareChainingObject.middleware2, middlewareChainingHandlerObject.middlewareChainingHandler);

const dataSeedingRouter = Router();
dataSeedingRouter.post('/Data-Seeding/:id', dataSeedingControllerObject.dataSeedingController);


export { dataSeedingRouter, middlewareChainingRouter, loggingMiddelwareRouter, limitMiddlewareRouter, dummyMiddlewareRouter, customMiddlewareRouter }