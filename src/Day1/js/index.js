import { add, sub, mult, div } from './lib/math.js';
import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Format = (num1, num2) => {
    return [
        ['Operation', 'operand1', 'operand2', 'Result'],
        ['Add', String(num1), String(num2), String(add(num1, num2))],
        ['Subtract', String(num1), String(num2), String(sub(num1, num2))],
        ['Multiply', String(num1), String(num2), String(mult(num1, num2))],
        ['Divide', String(num1), String(num2), String(div(num1, num2))],
    ]
}

rl.question('Enter First Number ', (n1) => {
    rl.question('Enter Second Number ', (n2) => {
        const num1 = Number(n1);
        const num2 = Number(n2);
        if (isNaN(num1) || isNaN(num2)) {
            console.log(' Invalid Number ');
            rl.close();
            return;
        }

        const result = Format(num1,num2);
        const csvContent = result.map((i)=>i.join(',')).join('\n');
        fs.writeFile('./src/Day1/js/result.csv',csvContent,(err)=>{
            if(err){
                console.log('error occured ',err);
                return;
            }
            console.log('Writing Data Successful');
        })
        rl.close();

    })
})