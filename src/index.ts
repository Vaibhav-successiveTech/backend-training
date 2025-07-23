const express = require('express');
import {Request, Response} from 'express';
import mongoose from 'mongoose';
import ListServiceObject from './services/list';
import ListControllerObject from './controller/list';


const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/successive-db');
const db = mongoose.connection;

db.once('open', () => console.log('MongoDB connected'));

app.post('/db/list', ListServiceObject.ListService,ListControllerObject.ListController);

app.listen(3031, () => {
    console.log('server listening on https://localhost:3031');
});