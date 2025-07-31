import { Request, Response } from "express";

class ListControllerClass {
    ListController = (req: Request, res: Response) => {
        const result = req.body.result;
        if (!result) {
            res.status(500).json({
                message: req.body.err
            })
            return;
        }
        res.status(200).send(result);
    }
}
const ListControllerObject = new ListControllerClass();

export default ListControllerObject;