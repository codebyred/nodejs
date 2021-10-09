const fs = require('fs');
//synchronous way, anything after this code will run after this code gets executed:
try{
    files = fs.readdirSync('#');
    console.log(files);
}catch(err){
    console.log("you made a mistake baby");

}

// asynchronous way,using callbacks, makes everything run after this code
    //async method takes a callback func as argument
    fs.readdir('./',(err,f)=>{
        if(err)throw err;
        else console.log(f);
    });
