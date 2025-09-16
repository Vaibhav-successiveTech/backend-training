import { Router } from "express";
import ErrorMiddleWare from "../middleware/errorMiddleware";
import ErrorMiddleWareObject from "../middleware/errorMiddleware";
const errorRouter = Router();
errorRouter.post('/user',ErrorMiddleWareObject.ErrorMiddleWare);
export default errorRouter;