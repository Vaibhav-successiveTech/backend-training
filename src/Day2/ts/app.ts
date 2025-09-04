import express from 'express';
import { Request, Response } from 'express';
import mockList from './mockData';
import dotenv from 'dotenv'
dotenv.config();

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json(mockList);
});

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server Listening on http://localhost:${PORT}`);
});