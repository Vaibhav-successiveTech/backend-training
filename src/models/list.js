const mongoose = require("mongoose");
const List = mongoose.Schema({
    sportsList : [String]
})

module.exports = mongoose.model('list', List);