import healthCheckObject from "./healthCheck";
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

app.get('/health',healthCheckObject.healthCheckMiddleware);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`listening on url https://localhost:${PORT}`);
})
