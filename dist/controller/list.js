"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListControllerClass {
    constructor() {
        this.ListController = (req, res) => {
            const result = req.body.result;
            if (!result) {
                res.status(500).json({
                    message: req.body.err
                });
                return;
            }
            res.status(200).send(result);
        };
    }
}
const ListControllerObject = new ListControllerClass();
exports.default = ListControllerObject;
