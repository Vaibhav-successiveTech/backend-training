import mongoose from "mongoose";
import UserRoutes from "./routes/userRoutes";
import { HeaderSecurity } from "./middleware/securityheader";

const express = require("express");
const app = express();
app.use(express.json());
HeaderSecurity.apply(app);

mongoose.connect('mongodb://localhost:27017/userPage');
const db = mongoose.connection;

db.once('open', () => console.log('Mongoose Connected'));

app.use('/Day10/user',UserRoutes);

app.use((err, req, res, next) => {
    res.status(400).json({
        message : err.message
    })
})

app.listen(3000, () => {
    console.log('listening on https://localhost:3000');
})
