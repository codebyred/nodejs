const express=require('express');
const app=express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));

//route-1:
app.get('/user',(req,res)=>{
    res.sendFile(__dirname+"/public/user.html");
});

//listening at port:
app.listen(3000,()=>console.log(`listening on port ${port}`));
