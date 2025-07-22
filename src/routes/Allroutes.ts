import { Router } from "express";
import asyncRouter from "./asyncRouter";
import validateParamsRouter from "./vaidateParamsRouter";
import errorRouter from "./errorRouter";
const AllRouter = Router();

AllRouter.use(asyncRouter);
AllRouter.use(validateParamsRouter);
AllRouter.use(errorRouter);

export default AllRouter;