
const express=require("express");
const app=express();
const cors=require('cors');
const multer=require("multer");
const schema=require("./db/models/db.model");
const uploadImage=require("./services/storage.service");
const post=require("./db/models/db.model");
//console.log(typeof uploadImage);

app.use(express.json());
app.use(cors())
const upload=multer({storage:multer.memoryStorage()});
app.post("/create-post", upload.single("image"), async(req,res) =>{
    console.log(req.body);
  //  console.log(req.file);
    const result=await uploadImage(req.file.buffer);
  //  console.log(result);
    const newqpost=await post.create({
        image:result.url,
        caption:req.body.caption,
    })
  res.status(201).json({
    message:"Post created successfully",
    post:newqpost,
  })

})
app.get("/get-posts", async(req,res)=>{
    const posts=await post.find();
    res.status(200).json({
        message:"Posts fetched successfully",
        posts:posts,
    })
})
module.exports=app;