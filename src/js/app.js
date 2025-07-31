const express = require('express');
import mongoose from 'mongoose';
import UserRouter from './routes/user';

const app = express();
app.use(express.json());
app.use(UserRouter);

mongoose.connect('mongodb://localhost:27017/successive-db');
const db = mongoose.connection;

db.once('open', () => console.log('MongoDB connected'));

app.use((err,req,res,next)=>{
    if(err){
        res.status(400).json({
            message : err.message
        })
    }
})

app.listen(3000,()=>{
    console.log('listening on url https://localhost:3000');
})