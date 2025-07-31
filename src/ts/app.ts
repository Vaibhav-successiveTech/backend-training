import mongoose from "mongoose";
import UserRoutes from "./routes/userRoutes";
import { NextFunction, Request, Response } from "express";

const express = require("express");
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/userPage');
const db = mongoose.connection;

db.once('open', () => console.log('Mongoose Connected'));

app.use('/Day10/user',UserRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({
        message : err.message
    })
})

app.listen(3000, () => {
    console.log('listening on https://localhost:3000');
})
