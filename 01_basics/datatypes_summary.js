// primitive 

// 7 types : String, Number, Boolean,null,undefinde,
// symbol,bigint

const score = 100  
const score1 = 100.3   


const isLoggedIn = false
const outsideTemp = null
let userEmail; //iske andar undefined value padi hogi lekin hm chahe to manually define ke sakte h

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 234242453423721n


// Reference (Non primitive )

// Array, Object, Function

const heros = ["shaktiman" , "naagrah","doga"]

let myobj = {
    name : "ankit",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof anotherId);




// =============================================================================

// stack(primitive datatype)  && heap(non-primitive)

let myYoutubename = "ankitpal@gmail.com"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "ankitpal@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);
