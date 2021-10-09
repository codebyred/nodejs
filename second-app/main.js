//including the paths:
const cons=require('./cons');
const soms=require('./soms');

//printing to see what we actually getting through require func:
console.log(`what cons is: ${cons}`);


//creating new obj of cons modules Angle constructor function:
const angle1 = new cons.Angle(5,5);

//accesing Angle's prototype method calcu():
var output1 = angle1.calcu();

//printing return value of the method:
console.log(`output of calcu method of Angle construct function: ${output1}`);

//doing same things for a different child module:
const soms1 = new soms.Plus(2,2);
let output2 = soms1.calcu();
console.log(`output2 of calcu method of Plus construct function: ${output2}`);




//printing this module:
console.log(module);
