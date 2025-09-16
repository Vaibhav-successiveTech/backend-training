import { z } from 'zod';
import { Request, Response, NextFunction } from 'express'

const nameCheck = (name: string): boolean => {
    return name.length > 3;
}

const ageCheck = (age: number): boolean => {
    return age > 18;
}

const zipCodeCheck = (zipCode: string): boolean => {
    console.log(zipCode, typeof (zipCode));
    return !isNaN(parseInt(zipCode))
}

const emailCheck = (email: string): boolean => {
    const emailSchema = z.string().email();
    return emailSchema.safeParse(email).success;
}

class RegistrationMiddlewareClass {
    RegistrationMiddleware = (req: Request, res: Response, next: NextFunction) => {
        const { name, age, zipCode, email } = req.body;
        console.log('inside middleware');
        if (!name || !age || !zipCode || !email) {
            return res.status(400).json({
                message: 'Missing feild'
            });
        }

        if (!(nameCheck(name) && ageCheck(age) && zipCodeCheck(zipCode) && emailCheck(email))) {
            return res.status(401).json({
                message: 'Incorrect Input'
            })
        }

        next();

    }

}

const RegistrationMiddlewareObject = new RegistrationMiddlewareClass();
export { RegistrationMiddlewareObject };