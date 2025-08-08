import express from 'express';
import mockList from './mockdata';

const app = express();

app.get('/',(req,res)=>{
    res.send(mockList);
})

app.listen(3000,()=>{
    console.log(`Server Listening on http://localhost:3000`);
})