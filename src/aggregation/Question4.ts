import OrderModel from "../models/sampleData";
const ProductSold10 = async()=>{
    const list = await OrderModel.aggregate([
        {
            $unwind : '$items'
        },
        {
            $group : {
                _id : '$items.productName',
                totalCount : {$sum:'$items.quantity'}
            }
        },
        {
            $match : { totalCount: {$gte : 10}}
        }
    ])
    console.log(`\nProducts sold more than 10 times :`);
    list.map((i)=>console.log(i));
}

export default ProductSold10;