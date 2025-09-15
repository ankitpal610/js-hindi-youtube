const score = 400

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);


console.log(balance.toFixed(2));  // very useful

const otherNumber =  123.499

console.log(otherNumber.toPrecision(3));


const hundreds = 10000000
console.log(hundreds.toLocaleString('en-In'));



// ++++++++++++++++++++  maths  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log(Math)
// console.log(Math.abs(-4)); //  abs ka mtlb h absolute value
// console.log(Math.round(4.4));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(5.9));
// console.log(Math.min(4,5,8,1,2));
// console.log(Math.max(4,5,8,1,2));

console.log(Math.random());
console.log(Math.floor(Math.random()*10 )+1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);
