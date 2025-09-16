import { Router } from "express";
import { dataSeedingRouter, middlewareChainingRouter, loggingMiddelwareRouter, limitMiddlewareRouter, dummyMiddlewareRouter, customMiddlewareRouter } from './otherRoutes'
import { UserRouter } from "./userRoutes";
const AllRouter = Router();

AllRouter.use(dataSeedingRouter);
AllRouter.use(middlewareChainingRouter);
AllRouter.use(loggingMiddelwareRouter);
AllRouter.use(limitMiddlewareRouter);
AllRouter.use(dummyMiddlewareRouter);
AllRouter.use(customMiddlewareRouter);
AllRouter.use(UserRouter);

export default AllRouter;