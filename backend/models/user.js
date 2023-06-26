//Import mongoose module
const mongoose=require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

//Schema
const userSchema=mongoose.Schema({
firstName:String,
lastName:String,
email:{type:String, unique: true},
password:String,
role:String,
tel:Number,
});
// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);
//Model Name
const user=mongoose.model("User", userSchema);
//Make file exportable
module.exports=user;