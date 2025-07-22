import { Router } from "express";
import validateParams from "../middleware/validateParams";
const validateParamsRouter = Router();
validateParamsRouter.get('/params/:id',validateParams);
export default validateParamsRouter;