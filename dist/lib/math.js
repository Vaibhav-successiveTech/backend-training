"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.div = exports.mult = exports.sub = exports.add = void 0;
const add = (num1, num2) => num1 + num2;
exports.add = add;
const sub = (num1, num2) => num1 - num2;
exports.sub = sub;
const mult = (num1, num2) => num1 * num2;
exports.mult = mult;
const div = (num1, num2) => {
    if (num2 == 0)
        return 'Divison By Zero';
    return num1 / num2;
};
exports.div = div;
