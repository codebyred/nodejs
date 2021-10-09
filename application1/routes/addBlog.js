const express = require('express');
const router = express.Router();

//importing blogs.js from models
const Blog = require('../models/blogs');

router.get('/',(req,res)=>{

    //creating instance of Blog
    const blog = new Blog({
        title:'new blog',
        snippet:'about my loli blog',
        body:'more about this blog'
    });

    //saving it in the database
    blog.save()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        })

});
module.exports=router;