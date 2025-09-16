import { Router } from "express";
import UserSignupMiddlewareObject from "../middleware/userSignup";
import UserSignupControllerObject from "../controller/UserSignup";
import UserLoginMiddlewwareObject from "../middleware/userLogin";
import UserLoginControllerObject from "../controller/UserLogin";

const UserRoutes = Router();
UserRoutes.post('/signup',UserSignupMiddlewareObject.UserSignupMiddleware,UserSignupControllerObject.UserSignup);
UserRoutes.get('/login',UserLoginMiddlewwareObject.UserLoginMiddleware,UserLoginControllerObject.UserLogin);

export default UserRoutes;