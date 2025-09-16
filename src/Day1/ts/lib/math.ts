const add = (num1: number, num2: number): number => num1 + num2;
const sub = (num1: number, num2: number): number => num1 - num2;
const mult = (num1: number, num2: number): number => num1 * num2;
const div = (num1: number, num2: number): number => {
    if (num2 == 0) return Infinity;
    return num1 / num2;
}

export { add, sub, mult, div };