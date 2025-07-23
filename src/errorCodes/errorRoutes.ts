import { Router, Request, Response, NextFunction } from "express";
import { Error400, Error401, Error403, Error404, Error405, Error429, Error500, Error503 } from "./error";

const errorCodeRouter = Router();
errorCodeRouter.use('/Error/400',Error400);
errorCodeRouter.get('/Error/401',Error401);
errorCodeRouter.get('/Error/403',Error403);
errorCodeRouter.get('/Error/404',Error404);
errorCodeRouter.get('/Error/405',Error405);
errorCodeRouter.get('/Error/429',Error429);
errorCodeRouter.get('/Error/500',Error500);
errorCodeRouter.get('/Error/503',Error503);

export  {errorCodeRouter};