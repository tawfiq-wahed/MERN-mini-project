const express=require("express");
const app=express();
app.use(express.json());
const note=[];
app.post("/tawfiq",(req,res)=>{
   console.log(req.body);
   note.push(req.body);
   res.status(201).json({
    message:"data has been added successfully"
   })
    })

    app.get("/tawfiq",(req,res)=>{
   res.status(200).json({
    message:"data has been retrieved successfully",  
    note:note
   })
    })
    app.delete("/tawfiq/:index",(req,res)=>{
   const index=req.params.index;
   delete note[index];
   res.status(200).json({
    message:"data has been deleted successfully",  
   })
    })
    
     app.patch("/tawfiq/:index",(req,res)=>{
   const index=req.params.index;
   const description=req.body.description;
   note[index].description=description;
   const title=req.body.title;
   note[index].title=title;
   res.status(200).json({
    message:"data has been updated successfully",  
   })
    })
    
module.exports=app;