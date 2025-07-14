const express = require('express');
import type { Request, Response } from 'express';

const PORT = 3001;

const app = express();

const mockList: { id: number; name: string }[] = require('./mockData');

app.get('/', (req: Request, res: Response) => {
    res.json(mockList);
});

app.listen(PORT, () => {
    console.log(`Server Listening on http://localhost:${PORT}`);
});
