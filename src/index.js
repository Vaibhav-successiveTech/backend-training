const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./models/user');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/successive-db');
const db = mongoose.connection;

db.once('open', () => console.log('MongoDB connected'));

app.post('/user', async (req, res) => {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res.send(result);
})

app.listen(3001, () => {
    console.log('server listening on https://localhost:3001');
});