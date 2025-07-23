"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const mongoose_1 = require("mongoose");
const list_1 = require("./services/list");
const list_2 = require("./controller/list");
const app = express();
app.use(express.json());
mongoose_1.default.connect('mongodb://localhost:27017/successive-db');
const db = mongoose_1.default.connection;
db.once('open', () => console.log('MongoDB connected'));
app.post('/db/list', list_1.default.ListService, list_2.default.ListController);
app.listen(3032, () => {
    console.log('server listening on https://localhost:3032');
});
