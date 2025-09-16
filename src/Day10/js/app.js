import mongoose from "mongoose";
import UserRoutes from "./routes/userRoutes";
<<<<<<< HEAD:src/Day12/ts/app.ts
import { NextFunction, Request, Response } from "express";
import { HeaderSecurity } from "./middleware/securityheader";
=======
>>>>>>> Day11:src/Day10/js/app.js
import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

<<<<<<< HEAD:src/Day12/ts/app.ts
const security = new HeaderSecurity();

app.use(security.HelmetSecurity);

const URL = process.env.mongoURLDay12
mongoose.connect(URL||'');
=======
const URL = process.env.mongoURLDay10;
mongoose.connect(URL);
>>>>>>> Day11:src/Day10/js/app.js
const db = mongoose.connection;

db.once('open', () => console.log('Mongoose Connected'));

app.use('/Day10/user',UserRoutes);

app.use((err, req, res, next) => {
    res.status(400).json({
        message : err.message
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`listening on https://localhost:${PORT}`);
})
