const express = require("express");
const app = express();
const page1 = require('./routes/page1');
const page2 = require('./routes/page2');

app.get('/',page1);
app.get('/2',page2);



app.listen(3000,(req,res)=>{
    console.log("ow baby im listening!");
})