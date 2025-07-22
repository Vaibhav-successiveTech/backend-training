const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ListController = require('./controller/list');
const ListService = require('./services/list');


const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/successive-db');
const db = mongoose.connection;

db.once('open', () => console.log('MongoDB connected'));

app.post('/db/list', ListService,ListController);

app.listen(3003, () => {
    console.log('server listening on https://localhost:3003');
});