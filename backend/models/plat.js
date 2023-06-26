//Import mongoose module
const mongoose=require("mongoose");
//Schema
const platSchema=mongoose.Schema({
name:String,
price:Number,
description:String,
});
//Model Name
const plat=mongoose.model("Plat", platSchema);
//Make file exportable
module.exports=plat;