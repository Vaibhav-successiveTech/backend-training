import express from 'express';
import { Request, Response } from 'express';
import mockList from './mockData';

const PORT = 3001;

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json(mockList);
});

app.listen(PORT, () => {
    console.log(`Server Listening on http://localhost:${PORT}`);
});
