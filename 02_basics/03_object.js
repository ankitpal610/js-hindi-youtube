//  singleton
Object.create


// object literals

const mySym =Symbol("key1") // symbol as key use krna h ya phir ek symbol lo object ke key me add krke dikha do
// related to sybol important for interview


const jsUser = {
    name:"ankit", //by default name is like "name"
    "full Name" : "Ankit pal",
    age : 18,
    // mySym: "key1",// this is not correct way
    [mySym] : Symbol("key1"),
    location: "jaipur",
    email: "ankit@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturaday"]
}

console.log(jsUser.email);
console.log(jsUser["full Name"]);
console.log(jsUser["email"]);
// console.log(typeof jsUser.mySym);
console.log(typeof jsUser[mySym]);

jsUser.email = "ankitchatgmpta@.com"
console.log(jsUser.email);

// Object.freeze(jsUser)
jsUser.email = "shani2424@gmail.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js  user");
}


console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello js  user,${this.name}`);
} 
console.log(jsUser.greetingTwo());