import express, { NextFunction, Request, Response } from 'express';
import AllRouter from './routes/Allroutes';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());

 app.use('/Day5',AllRouter);


app.use((err,req,res,next)=>{
    res.status(400).json({
        error : err.message
    })
});

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`Server Listening on https://localhost:${PORT}`);
});