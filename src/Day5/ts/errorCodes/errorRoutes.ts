import { Router, Request, Response, NextFunction } from "express";
import  ErrorCodeObject  from "./error";

const errorCodeRouter = Router();
errorCodeRouter.use('/Error/400',ErrorCodeObject.Error400);
errorCodeRouter.get('/Error/401',ErrorCodeObject.Error401);
errorCodeRouter.get('/Error/403',ErrorCodeObject.Error403);
errorCodeRouter.get('/Error/404',ErrorCodeObject.Error404);
errorCodeRouter.get('/Error/405',ErrorCodeObject.Error405);
errorCodeRouter.get('/Error/429',ErrorCodeObject.Error429);
errorCodeRouter.get('/Error/500',ErrorCodeObject.Error500);
errorCodeRouter.get('/Error/503',ErrorCodeObject.Error503);

export  {errorCodeRouter};