const fs = require ('fs');

let readableStream = fs.createReadStream(`${__dirname}/text.txt`,{encoding:'utf8'});

readableStream.on('data',(chunk)=>{
    console.log(chunk);
})


