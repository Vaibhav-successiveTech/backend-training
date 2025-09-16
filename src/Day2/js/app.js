import express from 'express';
import mockList from './mockdata';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/',(req,res)=>{
    res.send(mockList);
})

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server Listening on http://localhost:${PORT}`);
})