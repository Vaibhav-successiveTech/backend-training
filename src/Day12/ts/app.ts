import mongoose from "mongoose";
import UserRoutes from "./routes/userRoutes";
import { NextFunction, Request, Response } from "express";
import { HeaderSecurity } from "./middleware/securityheader";
import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const security = new HeaderSecurity();

app.use(security.HelmetSecurity);

const URL = process.env.mongoURL
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
