import { Router } from "express";
import ErrorMiddleWare from "../middleware/errorMiddleware";
const errorRouter = Router();
errorRouter.post('/user',ErrorMiddleWare);
export default errorRouter;