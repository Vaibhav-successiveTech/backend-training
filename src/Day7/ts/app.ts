import healthCheckObject from "./healthCheck";

import express from 'express';
const app = express();

app.get('/health',healthCheckObject.healthCheckMiddleware);

app.listen(3005,()=>{
    console.log('listening on url https://localhost:3005');
})
