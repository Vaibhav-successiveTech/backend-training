import { Router } from "express";
import AsyncErrorHandler from "../middleware/asyncMiddleware";
const asyncRouter = Router();
asyncRouter.get('/async',AsyncErrorHandler);
export default asyncRouter;