const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    //renders index.ejs
    res.render('index',{title:'Home'});
    
});

module.exports=router;