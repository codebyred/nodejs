const EventEmitter = require('events');

function Logger(){

}
Logger =new Object(EventEmitter);
Logger.prototype.log=function(){

    this.emit('loggedmessege',{id:1, url:'http://'});
}

Logger.prototype.print = function (messege){
    console.log(messege);
}
// class Logger extends EventEmitter{
//     log(){
//         this.emit('loggedmessege',{id:1 , url:'http://'})
//     }
// }

module.exports = Logger;
  