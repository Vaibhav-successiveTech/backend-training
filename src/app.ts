import {Request,Response} from 'express';

const express = require('express');
const app = express();
app.use(express.json());

import {dataSeedingController} from './controllers/OtherController';
import { VerifyUser, SignInUser } from './middleware/UserJWTMiddleware';
import { VerifyString, SignString } from './middleware/dummyJWT';
import { loggingMiddelware } from './middleware/loggingMiddleware';

app.post('/Data-Seeding/:id',dataSeedingController);

app.post('/AddUser',SignInUser,(req:Request,res:Response)=>{
    res.status(201).json({
        token : req.body.token
    });
});

app.post('/VerifyUser',VerifyUser,(req:Request,res:Response)=>{
    res.status(200).json({
        status : 'User Authorized',
        data : req.body.userData
    })
})

app.post('/AddString',SignString,(req:Request,res:Response)=>{
    res.status(200).json({
        token : req.body.token
    })
})

app.post('/VerifyString',VerifyString,(req:Request,res:Response)=>{
    res.status(200).json({
        string : req.body.stringData
    });
});

app.get('/logging',loggingMiddelware,(req:Request,res:Response)=>{
    res.status(200).send('Consoled URL,method and timeStamp');
})

app.listen(3001,()=>{
    console.log('listening on url : https://localhost:3001');
});