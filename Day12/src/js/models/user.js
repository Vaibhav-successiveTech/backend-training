import mongoose from "mongoose";
const UserDBSchema = new mongoose.Schema({
    userName : String,
    email : String,
    hashedPassword : String,
    profile : String
});

export default mongoose.model('user',UserDBSchema);