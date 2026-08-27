const mongoose = require("mongoose");
const note =new mongoose.Schema({
    image:String,
    caption:String,
})
const model=mongoose.model("note",note);
module.exports=model;