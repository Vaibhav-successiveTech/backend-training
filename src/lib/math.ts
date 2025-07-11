const add = (num1 : number,num2 : number)=>num1+num2;
const sub = (num1 : number,num2 : number)=>num1-num2;
const mult = (num1 : number,num2 : number)=>num1*num2;
const div = (num1 : number,num2 : number)=>{
    if(num2==0)return 'Divison By Zero';
    return num1/num2;
}

export {add,sub,mult,div};