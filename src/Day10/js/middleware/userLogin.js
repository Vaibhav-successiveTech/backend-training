import zod from 'zod';
import User from '../models/user';
import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

const UserLoginSchema = zod.object({
    userName: zod.string(),
    password: zod.string()
});

class UserLoginMiddlewwareClass {
    UserLoginMiddleware = async (req, res, next) => {
        const result = UserLoginSchema.safeParse(req.body);

        if (!result.success) {
            next(createError(400, result.error));
        }
        try {
            const { userName, password } = req.body;
            const dbResult = await User.findOne({ userName });
            if (!dbResult) {
                next(createError(400, 'No user Exist'))
                return;
            }
            const dbPass = dbResult.hashedPassword || '';
            const isMatch = await bcrypt.compare(password, dbPass);
            if (!isMatch) {
                next(createError(401, 'Invalid Username or Password'))
                return;
            }
            req.body.result = dbResult;
            next();
        } catch (err) {
            next(createError(401, String(err)))
        }
    }
}

const UserLoginMiddlewwareObject = new UserLoginMiddlewwareClass();
export default UserLoginMiddlewwareObject;