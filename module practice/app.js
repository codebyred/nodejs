// const http = require('http');
const aClass = require('./aClass');
// const server = http.createServer((req,res)=>{
//     if(req.url == '/'){

//     }
// })


const getHm = new aClass.ClassB();
console.log(getHm.__proto__);

const getUm = new aClass.ClassA();
console.log(getUm.hold());

