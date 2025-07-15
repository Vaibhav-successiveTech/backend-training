import {NextFunction, Request,Response} from 'express';

const express = require('express');
const app = express();
app.use(express.json());

import {dataSeedingController} from './controllers/OtherController';
import { VerifyUser, SignInUser } from './middleware/UserJWTMiddleware';
import { VerifyString, SignString } from './middleware/dummyJWT';
import { loggingMiddelware } from './middleware/loggingMiddleware';
import { middleware1,middleware2 } from './middleware/middlewareChaining';
import { customMiddleware } from './middleware/customMiddleware';
import { limitMiddleware } from './middleware/limitMiddleware';
import { errorMiddleware } from './middleware/errorHandler';
import { SignInUserHandler, VerifyUserHandler } from './routes/userRoutes';
import { AddStrigHandler, customMiddlewareHandler, errorMiddlewareHandler, limitMiddlewareHandler, loggingMiddelwareHandler, middlewareChainingHandler, VerifyStringHandler } from './routes/otherRoutes';

app.post('/Data-Seeding/:id',dataSeedingController);

app.post('/AddUser',SignInUser,SignInUserHandler);

app.post('/VerifyUser',VerifyUser,VerifyUserHandler);

app.post('/AddString',SignString,AddStrigHandler);

app.post('/VerifyString',VerifyString,VerifyStringHandler);

app.get('/logging',loggingMiddelware,loggingMiddelwareHandler);

app.get('/middlewareChaining',middleware1,middleware2,middlewareChainingHandler);

app.get('/customMiddleware',customMiddleware,customMiddlewareHandler);

app.get('/limitMiddleware/:id',limitMiddleware,limitMiddlewareHandler);

app.get('/errorHandler',errorMiddlewareHandler);

app.use(errorMiddleware);

app.listen(3001,()=>{
    console.log('listening on url : https://localhost:3001');
});