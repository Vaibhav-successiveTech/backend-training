import mongoose from "mongoose";
import UserRoutes from "./routes/userRoutes";
<<<<<<< HEAD:src/Day12/js/app.js
import { HeaderSecurity } from "./middleware/securityheader";
import express from "express";
import dotenv from 'dotenv';
=======
import { NextFunction, Request, Response } from "express";
import express from "express";
import dotenv from 'dotenv';

>>>>>>> Day11:src/Day11/js/app.js
dotenv.config();

const app = express();
app.use(express.json());
HeaderSecurity.apply(app);

<<<<<<< HEAD:src/Day12/js/app.js
const URL = process.env.mongoURLDay12
=======
const URL = process.env.mongoURLDay11
>>>>>>> Day11:src/Day11/js/app.js
mongoose.connect(URL);
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
