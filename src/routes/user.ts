import { Router } from "express";
import UserMiddlewareObject from "../middleware/user";
import UserControllerObject from "../controllers/user";
const UserRouter = Router();
UserRouter.post('/Day9/user',UserMiddlewareObject.UserMiddleware,UserControllerObject.UserController);

export default UserRouter;