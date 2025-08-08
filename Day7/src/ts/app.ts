import healthCheckObject from "./healthCheck";

const express = require('express');
const app = express();

app.get('/health',healthCheckObject.healthCheckMiddleware);

app.listen(3005,()=>{
    console.log('listening on url https://localhost:3005');
})
