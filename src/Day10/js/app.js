import mongoose from "mongoose";
import UserRoutes from "./routes/userRoutes";
import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const URL = process.env.mongoURLDay10;
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
