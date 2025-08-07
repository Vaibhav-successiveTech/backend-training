import mongoose from 'mongoose';
import OrderModel from './models/sampleData';
const fakeOrders = [
  {
    orderId: "ORD001",
    customerName: "Alice Johnson",
    orderDate: new Date("2025-08-01"),
    status: "Delivered",
    items: [
      { productName: "Laptop", quantity: 1, price: 1200 },
      { productName: "Mouse", quantity: 2, price: 25 },
      { productName: "Keyboard", quantity: 1, price: 100 }
    ],
    totalAmount: 1350
  },
  {
    orderId: "ORD002",
    customerName: "Bob Smith",
    orderDate: new Date("2025-08-02"),
    status: "Shipped",
    items: [
      { productName: "Monitor", quantity: 2, price: 250 },
      { productName: "Headphones", quantity: 1, price: 50 }
    ],
    totalAmount: 550
  },
  {
    orderId: "ORD003",
    customerName: "Charlie Brown",
    orderDate: new Date("2025-08-03"),
    status: "Pending",
    items: [
      { productName: "Desk Chair", quantity: 1, price: 200 }
    ],
    totalAmount: 200
  },
  {
    orderId: "ORD004",
    customerName: "Alice Johnson",
    orderDate: new Date("2025-08-04"),
    status: "Delivered",
    items: [
      { productName: "Tablet", quantity: 2, price: 350 },
      { productName: "Stylus Pen", quantity: 1, price: 50 }
    ],
    totalAmount: 750
  },
  {
    orderId: "ORD005",
    customerName: "David Lee",
    orderDate: new Date("2025-08-05"),
    status: "Shipped",
    items: [
      { productName: "Smartphone", quantity: 3, price: 500 },
      { productName: "Charger", quantity: 3, price: 20 }
    ],
    totalAmount: 1560
  },
  {
    orderId: "ORD006",
    customerName: "Emma Watson",
    orderDate: new Date("2025-08-06"),
    status: "Pending",
    items: [
      { productName: "Monitor", quantity: 2, price: 250 },
      { productName: "Keyboard", quantity: 1, price: 100 },
      { productName: "Mouse", quantity: 1, price: 25 }
    ],
    totalAmount: 625
  },
  {
    orderId: "ORD007",
    customerName: "Frank Miller",
    orderDate: new Date("2025-08-07"),
    status: "Delivered",
    items: [
      { productName: "Headphones", quantity: 4, price: 50 }
    ],
    totalAmount: 200
  },
  {
    orderId: "ORD008",
    customerName: "Grace Lee",
    orderDate: new Date("2025-08-08"),
    status: "Shipped",
    items: [
      { productName: "Camera", quantity: 1, price: 800 },
      { productName: "SD Card", quantity: 2, price: 20 }
    ],
    totalAmount: 840
  },
  {
    orderId: "ORD009",
    customerName: "Hank Green",
    orderDate: new Date("2025-08-09"),
    status: "Delivered",
    items: [
      { productName: "Microphone", quantity: 2, price: 120 },
      { productName: "Pop Filter", quantity: 1, price: 25 }
    ],
    totalAmount: 265
  },
  {
    orderId: "ORD010",
    customerName: "Ivy Chen",
    orderDate: new Date("2025-08-10"),
    status: "Pending",
    items: [
      { productName: "Speakers", quantity: 3, price: 150 }
    ],
    totalAmount: 450
  },
  {
    orderId: "ORD011",
    customerName: "Jack Ryan",
    orderDate: new Date("2025-08-11"),
    status: "Delivered",
    items: [
      { productName: "Laptop", quantity: 2, price: 1200 },
      { productName: "Mouse", quantity: 2, price: 25 },
      { productName: "Keyboard", quantity: 1, price: 100 }
    ],
    totalAmount: 2550
  },
  {
    orderId: "ORD012",
    customerName: "Kelly White",
    orderDate: new Date("2025-08-12"),
    status: "Shipped",
    items: [
      { productName: "Keyboard", quantity: 3, price: 100 },
      { productName: "Mouse", quantity: 3, price: 25 }
    ],
    totalAmount: 375
  },
  {
    orderId: "ORD013",
    customerName: "Leo Messi",
    orderDate: new Date("2025-08-13"),
    status: "Pending",
    items: [
      { productName: "Mouse", quantity: 5, price: 25 }
    ],
    totalAmount: 125
  },
  {
    orderId: "ORD014",
    customerName: "Mia Wong",
    orderDate: new Date("2025-08-14"),
    status: "Delivered",
    items: [
      { productName: "Tablet", quantity: 1, price: 350 },
      { productName: "Stylus Pen", quantity: 2, price: 50 }
    ],
    totalAmount: 450
  },
  {
    orderId: "ORD015",
    customerName: "Nathan Scott",
    orderDate: new Date("2025-08-15"),
    status: "Shipped",
    items: [
      { productName: "Smartphone", quantity: 2, price: 500 },
      { productName: "Charger", quantity: 2, price: 20 }
    ],
    totalAmount: 1040
  },
  {
    orderId: "ORD016",
    customerName: "Olivia Brown",
    orderDate: new Date("2025-08-16"),
    status: "Pending",
    items: [
      { productName: "Desk Chair", quantity: 2, price: 200 },
      { productName: "Lamp", quantity: 1, price: 50 }
    ],
    totalAmount: 450
  },
  {
    orderId: "ORD017",
    customerName: "Paul Walker",
    orderDate: new Date("2025-08-17"),
    status: "Delivered",
    items: [
      { productName: "Monitor", quantity: 1, price: 250 },
      { productName: "Mouse", quantity: 1, price: 25 }
    ],
    totalAmount: 275
  },
  {
    orderId: "ORD018",
    customerName: "Quinn Taylor",
    orderDate: new Date("2025-08-18"),
    status: "Shipped",
    items: [
      { productName: "Camera", quantity: 2, price: 800 },
      { productName: "Tripod", quantity: 1, price: 100 }
    ],
    totalAmount: 1700
  },
  {
    orderId: "ORD019",
    customerName: "Rachel Adams",
    orderDate: new Date("2025-08-19"),
    status: "Delivered",
    items: [
      { productName: "Headphones", quantity: 3, price: 50 },
      { productName: "Microphone", quantity: 1, price: 120 }
    ],
    totalAmount: 270
  },
  {
    orderId: "ORD020",
    customerName: "Steve Rogers",
    orderDate: new Date("2025-08-20"),
    status: "Pending",
    items: [
      { productName: "Speakers", quantity: 1, price: 150 },
      { productName: "Microphone", quantity: 1, price: 120 },
      { productName: "Headphones", quantity: 1, price: 50 }
    ],
    totalAmount: 320
  }
];

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/Orders`);
        console.log('Connected to DB');
        const total = await OrderModel.find();
        if (total.length == 0) {
            fakeOrders.map(async (i)=>{
                const newOrder = new OrderModel(i);
                await newOrder.save()
            })
        }
    } catch (err) {
        console.log(err);
    }
}

export default connectDB;