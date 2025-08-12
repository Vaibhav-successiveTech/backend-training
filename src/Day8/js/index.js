const express = require('express');
import mongoose from 'mongoose';
import ListServiceObject from './services/list';
import ListControllerObject from './controller/list';
import * as dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());

const URL = process.env.mongoURLDay8;
mongoose.connect(URL);
const db = mongoose.connection;

db.once('open', () => console.log('MongoDB connected'));

app.post('/db/list', ListServiceObject.ListService,ListControllerObject.ListController);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server listening on https://localhost:${PORT}`);
});