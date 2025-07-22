const List = require('../models/list');

const ListService = async(req, res, next) => {
    const newList = new List(req.body);
    console.log(newList);
    const result = await newList.save();
    console.log(result);
    req.body.result = result;
    next();
}

module.exports = ListService;