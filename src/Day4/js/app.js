import express from 'express';
const app = express();
import { validateUserObject } from "./middleware/middleware";
import { RegistrationMiddlewareObject } from "./middleware/FormValidation";
import { Request, Response } from 'express';
import { validateParamsObject } from "./middleware/routeValidation";
import { validateLocationObject } from "./middleware/validateLocation";
import { dynamicValidationMiddlewareObject } from "./middleware/dynamicValidation";
import dotenv from 'dotenv'

app.use(express.json());
dotenv.config();
//app.use(validateUser);


app.post('/api/form', RegistrationMiddlewareObject.RegistrationMiddleware, (req, res) => {
    res.json({
        message: 'User Authorised',
        data: req.body
    });
});

app.get('/:id', validateParamsObject.validateQueryParam, (req, res) => {
    res.status(200).json({ params: req.params.id })
});

app.get('/api/location', validateLocationObject.validateLocation, (req, res) => {
    res.status(200).json({
        location: req.headers.locationdata
    })
})

app.get('/api/user',dynamicValidationMiddlewareObject.dynamicValidationMiddleware,(req,res)=>{
    res.status(200).json({
        message : 'valid user',
        info : req.body
    })
})

app.get('/api/product',dynamicValidationMiddlewareObject.dynamicValidationMiddleware,(req,res)=>{
    res.status(200).json({
        message : 'valid product',
        info : req.body
    })
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on https://localhost:${PORT}`);
})