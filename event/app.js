const Logger = require('./logger');

const obj = new Object(Logger.prototype);

//register a lister:
obj.on('loggedmessege',(args)=>{
    console.log('Messege logged successfully',args);//this function will be called if only the event is raised
});
obj.log();

