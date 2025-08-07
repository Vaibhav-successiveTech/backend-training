import OrderModel from "../models/sampleData";
const MonthlyRevenue = async()=>{
    let timeLimit = new Date();
    timeLimit.setMonth(timeLimit.getMonth()-6);
    const list = await OrderModel.aggregate([
        {
            $match : {orderDate : {$gte : timeLimit}}
        },
        {
            $group : {
                _id : '$orderDate'
            }
        },
    ])
    console.log('\n',list);
}

export default MonthlyRevenue;