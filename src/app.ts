import connectDB from "./db";
import TotalRevenue from "./aggregation/Question1";
import NumberOfOrder from "./aggregation/Question2";
import Top3Customers from "./aggregation/Question3";
import ProductSold10 from "./aggregation/Question4";
import MonthlyRevenue from "./aggregation/Question5";

const appFunc = () => {
    connectDB();
    TotalRevenue();
    NumberOfOrder();
    Top3Customers();
    ProductSold10();
    MonthlyRevenue();
}

appFunc();