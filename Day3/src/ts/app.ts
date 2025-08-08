import { errorMiddlewareHandlerObject } from './controllers/OtherController';
import { errorMiddlewareObject } from './middleware/errorHandler';
import AllRouter from './routes/Allroutes';

import express from 'express';
const app = express();
app.use(express.json());
app.use(AllRouter);

app.get('/errorHandler', errorMiddlewareHandlerObject.errorMiddlewareHandler);

app.use(errorMiddlewareObject.errorMiddleware);

app.listen(3001, () => {
    console.log('listening on url : https://localhost:3001');
});