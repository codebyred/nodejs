const { resolveInclude } = require('ejs');
const express = require('express');
const app = express();

//initializing port
const port = 3000;

//importing routes
const homepage = require('./routes/home');
const aboutpage = require('./routes/about');
const createblog = require('./routes/create');
const addBlog = require ('./routes/addBlog');


//connect to database
const mongoose = require('mongoose');
const dbUri = 'mongodb+srv://Redoan:red@99@nodetuto.3vnhi.mongodb.net/nodetuto?retryWrites=true&w=majority';
mongoose.connect(dbUri,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{app.listen(port,()=>{
    console.log('connected to db');
    console.log(`listening at ${port}`);
});})
.catch((err)=>console.log(err));

//use static files
app.use(express.static('public'));

//use json files
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//register view engine
app.set('view engine','ejs');

//routes
app.use('/',homepage);
app.use('/about',aboutpage);
app.use('/blogs/create',createblog);
app.use('/add-blog',addBlog);
app.use((req,res)=>{
    res.status(404).render('404',{title:'Error'});
});








