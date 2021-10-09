const prompt = require('prompt-sync')({sigint: true});
const input = prompt('Enter a number between 1-4 :');
const num=Number(input);

if(num <=4){
    let value = num+4;
    console.log(`${num}+ 4=`);
    console.log(value);
    
}
