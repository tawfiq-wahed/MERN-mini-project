const express= require('express');
const app= express();
const notemodel=require("./db/models/node.model");
app.use(express.json());
  app.post("/add",async(req,res)=>{
     const data =req.body;
     console.log(data);
   await notemodel.create({
     title:data.title,
        description:data.description,
        age:data.age
    })
    res.status(201).json({ message: "Data added successfully" });
  })
  app.get("/get",async(req,res)=>{
    const data=await notemodel.find();
    res.status(200).json({
      message:"Data fetched successfully",
      data:data
    })
  })
    app.delete("/delete/:id",async(req,res)=>{
      const id=req.params.id;
      const data=await notemodel.findOneAndDelete({
       _id:id
      })
    res.status(200).json({
      message:"Data deleted successfully",
    })
  })
      app.patch("/update/:id",async(req,res)=>{
      const id=req.params.id;
      const desc=req.body.description;
      const data=await notemodel.findOneAndUpdate({
       _id:id},{description:desc}
      )
    res.status(200).json({
      message:"Data updated successfully",
    })
  })
module.exports= app;  