import mongoose from "mongoose";
import UserRoutes from "./routes/userRoutes";
import { NextFunction, Request, Response } from "express";
<<<<<<< HEAD:src/Day11/ts/app.ts
import express from "express";
import dotenv from 'dotenv';

dotenv.config()
const app = express();
app.use(express.json());

const URL = process.env.mongoURLDay11;
=======
import dotenv from 'dotenv';

import express from "express";
dotenv.config();

const app = express();
app.use(express.json());

const URL = process.env.mongoURLDay10;
>>>>>>> Day10:src/Day10/ts/app.ts
mongoose.connect(URL||'');
const db = mongoose.connection;

db.once('open', () => console.log('Mongoose Connected'));

app.use('/Day10/user',UserRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({
        message : err.message
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`listening on https://localhost:${PORT}`);
})
