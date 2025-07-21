const mongoose = require("mongoose");
const AddressSchema = mongoose.Schema({
    city: String,
    zip : Number
})

const UserSchema = mongoose.Schema({
    name : String,
    email : {type : String,unique : true},
    age : Number,
    hobbies : [String],
    address : AddressSchema,
});

module.exports = mongoose.model('abcd', UserSchema);