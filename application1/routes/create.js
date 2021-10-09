const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    //renders create.ejs
    res.render('create',{title:'Create'});
});
module.exports=router;