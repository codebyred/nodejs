const http = require ('http');

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("UwU");
        res.end();
    }
    if(req.url ==="/another"){
        res.write("chup shala");
        res.end();
    }
});

server.listen(3000);


