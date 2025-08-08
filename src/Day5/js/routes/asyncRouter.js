import { Router } from "express";
import AsyncErrorHandlerObject from "../middleware/asyncMiddleware";
const asyncRouter = Router();
asyncRouter.get('/async',AsyncErrorHandlerObject.AsyncErrorHandler);
export default asyncRouter;