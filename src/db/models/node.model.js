const mongoose=require("mongoose");
const note=new mongoose.Schema({
    title:String,
    description:String,
    age:Number,
    })
    const notemodel=mongoose.model("modelname",note);
    module.exports=notemodel;