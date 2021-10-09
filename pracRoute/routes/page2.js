const express = require('express');
const router = express.Router();

router.use(express.static('public'));

router
.route('')
.get((req,res)=>{
    res.sendFile('D:/Works/Codes/node/pracRoute/public/page2.html');
})

module.exports = router;
