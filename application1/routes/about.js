const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    //renders about.ejs
    res.render('about',{title:'About'});
});
module.exports=router;