import OrderModel from "../models/sampleData"
const NumberOfOrder = async()=>{
    const resp = await OrderModel.aggregate([{$group : {_id: '$status',itemCount : {$sum:1}}}])
    console.log(`\nStatus : `);
    resp.map((i)=>console.log(i));
}

export default NumberOfOrder;