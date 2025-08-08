import { add, sub, mult, div } from './lib/math';
import readline from 'readline';
import {promises as fs} from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Format = (num1: number, num2: number): String[][] => {
    return [
        ['Operation', 'operand1', 'operand2', 'Result'],
        ['Add', String(num1), String(num2), String(add(num1, num2))],
        ['Subtract', String(num1), String(num2), String(sub(num1, num2))],
        ['Multiply', String(num1), String(num2), String(mult(num1, num2))],
        ['Divide', String(num1), String(num2), String(div(num1, num2))],
    ]
}

const writeFunc = async (csvContent : string)=>{
     try {
        await fs.writeFile('./src/Day1/ts/result.csv', csvContent);
        console.log('Writing Data Successful');
    } catch (err) {
        console.log('error occurred', err);
    }
}

rl.question('Enter first Number : ', (n1: string) => {
    rl.question('Enter second Number : ', (n2: string) => {
        const num1 = Number(n1);
        const num2 = Number(n2);

        if (isNaN(num1) || isNaN(num2)) {
            console.log('Enter valid Number');
            rl.close();
            return;
        }


        const result = Format(num1, num2);

        const csvContent = result.map((i) => {
            let str = i.join(', ');
            return str;
        }).join('\n');

        writeFunc(csvContent);

        rl.close();
    })
})