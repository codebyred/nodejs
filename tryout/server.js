const express = require ('express');
const app =new express();

app.use(express.static(`${__dirname}/public`));

app.get('/image',(req,res)=>{
    res.sendFile(`${__dirname}/public/image.html`);
});


app.listen(3000,()=>console.log("I'm listening baby"));
