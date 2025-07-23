import express, { NextFunction, Request, Response } from 'express';
import AllRouter from './routes/Allroutes';
const app = express();
app.use(express.json());

 app.use('/Day5',AllRouter);


app.use((err : Error,req:Request,res:Response,next:NextFunction)=>{
    res.status(400).json({
        error : err.message
    })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server Listening on https://localhost:${PORT}`);
});