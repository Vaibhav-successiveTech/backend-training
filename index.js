const {add,sub,mult,div} = require('./lib/math');

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question('Enter first Number : ',(n1)=>{
    rl.question('Enter second Number : ',(n2)=>{
        const num1 = parseInt(n1);
        const num2 = parseInt(n2);

        if(isNaN(num1) || isNaN(num2)){
            console.log('Enter valid Number');
            rl.close();
        }


        const result = [
            ['Operation', 'operand1' ,'operand2','Result'],
            ['Add',String(num1),String(num2),add(num1,num2)],
            ['Subtract',String(num1),String(num2),sub(num1,num2)],
            ['Multiply',String(num1),String(num2),mult(num1,num2)],
            ['Divide',String(num1),String(num2),div(num1,num2)],
        ]

        const csvContent = result.map((i)=>{
            let str = i.map((j)=>j).join(', ');
            return str;
        }).join('\n');


        try{
            const res = fs.writeFileSync('./result.csv',csvContent);
            console.log('Writing Data Successful');
        }catch(err){
            console.log('error Occured : ',err);
        }

        rl.close();
    })
})