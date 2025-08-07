import OrderModel from "../models/sampleData";
const Top3Customers = async () => {
    const top3 = await OrderModel.aggregate([{ $sort: {totalAmount : -1} },{$limit:3}])
    console.log(`\nTop 3 Customers : ${(top3[0]?.customerName)},${(top3[1]?.customerName)},${(top3[2]?.customerName)}`)
}

export default Top3Customers;