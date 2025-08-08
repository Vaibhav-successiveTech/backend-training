import { Request, Response, NextFunction } from 'express';
import List from "../models/list";

const countryList : string[] = ['India','USA','Brazil','Japan'];
class ListServiceClass {
    ListService = async (req: Request, res: Response, next: NextFunction) => {
        const newList = new List({sportsList :countryList});
        const result = await newList.save();
        req.body = {};
        req.body.result = result;
        next();
    }
}

const ListServiceObject = new ListServiceClass();

export default ListServiceObject;