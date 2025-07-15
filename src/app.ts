const express = require('express');
const app = express();
import { validateUser } from "./middleware/middleware";
import { RegistrationMiddleware } from "./middleware/FormValidation";
import { Request, Response } from 'express';
import { validateQueryParam } from "./middleware/routeValidation";
import { validateLocation } from "./middleware/validateLocation";

app.use(express.json());
//app.use(validateUser);


app.post('/form', RegistrationMiddleware, (req: Request, res: Response) => {
    res.json({
        message: 'User Authorised',
        data: req.body
    });
});

app.get('/:id', validateQueryParam, (req: Request, res: Response) => {
    res.status(200).json({ params: req.params.id })
});

app.get('/api/location', validateLocation, (req: Request, res: Response) => {
    res.status(200).json({
        location: req.headers.locationdata
    })
})

app.listen(3001, () => {
    console.log('Server listening on https://localhost:3001');
})