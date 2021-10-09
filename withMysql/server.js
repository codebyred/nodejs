const express = require('express');
const app =  express();

const route1 = require('./route1');

app.get('/info',(req,res)=>{

})



app.listen(3000,()=>{
    console.log('server created,listening at port 3000');
})

