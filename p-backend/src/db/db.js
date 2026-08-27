const mongoose=require("mongoose");
 
async function connectDB(){
    await mongoose.connect(process.env.mongoURI) ;
    
    console.log("Database connected successfully");

}
module.exports=connectDB;