const userEmail =  [] //"ankit@gmail.com"

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values
// false,0,-0,BigInt 0n, "", null, undefined, NaN


// truthy values
// "0",'false', " ", [], {}, function(){}




// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("our object is empty");
    
}

//  Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
// console.log(val1);

val1 = null ?? 10
// console.log(val1);

val1 = null ?? undefined
console.log(val1);


val1 = undefined ?? null
console.log(val1);

val1 = null ?? 10 ?? 20
console.log(val1);

// Ternary operator

//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 100");


