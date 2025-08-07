import OrderModel from "../models/sampleData";
const TotalRevenue = async()=>{
    const totalRevenue = await OrderModel.aggregate([
        {
            $group : {
                _id:null,
                'totalRevenue' : {$sum : '$totalAmount'}
            }
        }
    ])

    console.log(`Total Revenue is ${totalRevenue[0]?.totalRevenue || 0}`);
}

export default TotalRevenue