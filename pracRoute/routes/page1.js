const express = require('express');
const { route } = require('./page2');
const router = express.Router();

router.use(express.static(`D:/Works/Codes/node/pracRoute/public`));

router
.route('')
.get((req,res)=>{
    res.sendFile(`D:/Works/Codes/node/pracRoute/public/page1.html`);
});

module.exports = router;