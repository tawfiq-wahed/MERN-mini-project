import React from "react";
import axios from 'axios';
 const handlesubmit=async(e)=>{
    e.preventDefault();
    const formdata=new FormData(e.target);
    axios.post("http://localhost:3000/create-post",formdata).then(()=>
 {
    alert("post created successfully");
    e.target.reset();
 })
 }
         
           
const Post = () => {
    return (
        <section className="post-here">
            <h1>Create Post</h1>
        

            
         <form onSubmit={handlesubmit} >
            <input type="file" name="image" accept="image/*" />
            <input type="text" name="caption" placeholder="Enter caption" required />
            <button type="submit">Submit</button>
         </form>
        </section>
    );
}

export default Post;