import { Request, Response, NextFunction } from 'express';
import List from "../models/list";

const ListService = async (req: Request, res: Response, next: NextFunction) => {
    const newList = new List(req.body);
    const result = await newList.save();
    req.body.result = result;
    next();
}

export default ListService;