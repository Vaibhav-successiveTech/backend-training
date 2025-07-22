"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const List = mongoose.Schema({
    sportsList: [String]
});
exports.default = mongoose.model('list', List);
