import { Router } from "express";
import UserSignupMiddlewareObject from "../middleware/userSignup";
import UserSignupControllerObject from "../controller/UserSignup";
import UserLoginMiddlewwareObject from "../middleware/userLogin";
import UserLoginControllerObject from "../controller/UserLogin";

const UserRoutes = Router();
/**
 * @swagger
 * /Day10/user/signup:
 *   post:
 *     summary: Sign up user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - email
 *               - password
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - message
 *                 - userName
 *                 - email
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User Created
 *                 userName:
 *                   type: string
 *                   example: yash
 *                 email:
 *                   type: string
 *                   example: yash@gmail.com
 */
UserRoutes.post('/signup',UserSignupMiddlewareObject.UserSignupMiddleware,UserSignupControllerObject.UserSignup);
UserRoutes.get('/login',UserLoginMiddlewwareObject.UserLoginMiddleware,UserLoginControllerObject.UserLogin);

export default UserRoutes;