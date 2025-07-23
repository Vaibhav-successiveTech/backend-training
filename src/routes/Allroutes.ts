import { Router ,Request,Response} from "express";
import asyncRouter from "./asyncRouter";
import validateParamsRouter from "./vaidateParamsRouter";
import errorRouter from "./errorRouter";
import {errorCodeRouter} from "../errorCodes/errorRoutes";
const AllRouter = Router();

AllRouter.use(asyncRouter);
AllRouter.use(validateParamsRouter);
AllRouter.use(errorRouter);
 AllRouter.use(errorCodeRouter);

export default AllRouter;