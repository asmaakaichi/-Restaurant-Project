//Import mongoose module
const mongoose=require("mongoose");
//Schema
const chefSchema=mongoose.Schema({
name:String,
speciality:String,
experience:Number,
});
//Model Name
const chef=mongoose.model("Chef", chefSchema);
//Make file exportable
module.exports=chef;