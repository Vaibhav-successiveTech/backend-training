import { errorMiddlewareHandlerObject } from './controllers/OtherController';
import { errorMiddlewareObject } from './middleware/errorHandler';
import AllRouter from './routes/Allroutes';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
app.use(express.json());
app.use(AllRouter);

app.get('/errorHandler', errorMiddlewareHandlerObject.errorMiddlewareHandler);

app.use(errorMiddlewareObject.errorMiddleware);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`listening on url : https://localhost:${PORT}`);
});