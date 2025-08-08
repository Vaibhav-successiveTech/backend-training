const express = require('express');
import { Request, Response } from 'express';
import mockList from './mockData';
import connectDB from "../db";

connectDB();

const PORT = 3001;

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json(mockList);
});

app.listen(PORT, () => {
    console.log(`Server Listening on http://localhost:${PORT}`);
});
