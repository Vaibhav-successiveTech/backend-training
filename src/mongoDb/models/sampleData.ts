import { Schema, model } from 'mongoose';
const Order = new Schema({
        "orderId": String,
        "customerName": String,
        "orderDate": Date,
        "status": String, // e.g., "Pending", "Shipped", "Delivered"
        "items": [
            { "productName": String, "quantity": Number, "price": Number }
        ],
        "totalAmount": Number
})

const OrderModel = model('Sample',Order);
export default OrderModel;