const imagekit=require("@imagekit/nodejs");
const imagekitInstance=new imagekit({
    privateKey:process.env.imagekit,
})
const uploadImage=async(buffer)=>{
    const result=await imagekitInstance.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpeg",
    })
    return result;
}
module.exports=uploadImage;