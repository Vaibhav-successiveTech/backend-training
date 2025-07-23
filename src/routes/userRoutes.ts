import { Router } from "express";
import {VerifyUserMiddlewareObject} from '../middleware/UserJWTMiddleware'
import { SignInUserHandlerObject, VerifyUserHandlerObject } from "../controllers/UserController";

const UserRouter = Router();
UserRouter.post('/AddUser',VerifyUserMiddlewareObject.SignInUser,SignInUserHandlerObject.SignInUserHandler);

UserRouter.post('/VerifyUser',VerifyUserMiddlewareObject.VerifyUser,VerifyUserHandlerObject.VerifyUserHandler);

export {UserRouter};