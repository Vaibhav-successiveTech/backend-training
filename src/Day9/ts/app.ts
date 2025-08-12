import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './routes/user';
import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(UserRouter);

const URL = process.env.mongoURLDay9;

mongoose.connect(URL||'');
const db = mongoose.connection;

db.once('open', () => console.log('MongoDB connected'));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`listening on url https://localhost:${PORT}`);
})