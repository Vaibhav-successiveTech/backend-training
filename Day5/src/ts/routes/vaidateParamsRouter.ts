import { Router } from "express";
import validateParams from "../middleware/validateParams";
import validateParamsObject from "../middleware/validateParams";
const validateParamsRouter = Router();
validateParamsRouter.get('/params/:id',validateParamsObject.validateParams);
export default validateParamsRouter;