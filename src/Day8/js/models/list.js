const mongoose = require("mongoose");

const List = mongoose.Schema({
    sportsList : [String]
})

export default mongoose.model('list', List);