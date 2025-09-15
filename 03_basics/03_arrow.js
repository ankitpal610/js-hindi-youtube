const user = {
    username : "ankit",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage();

// console.log(this); // learn this thing ==>> ab hm node environment ke andar h to apka this jo h refer kr rha h kisko ek empty object ko('{}') kyuki abhi globl ke andar koi context hi nhi h
// interview question => browser ke andar globla objectt hota h ->window


// function chai(){
//     let username = "hitesh"
//     // console.log(this);
//     console.log(this.username); //mind it bcoz dom manipulation it is use
// }
// chai()


// const chai = function(){
//     let username = "ankit"
//     console.log(this);
//      console.log(this.username);
// }
// chai()


// arrow function

// const chai = () => {
//     let username = "ankit"
//      console.log(this);
//      console.log(this.username);
// }
// chai()
 

// const addtwo = (num1, num2) => {
//     return num1 + num2    // this is basic arrow function yha pr 
//                            // explicitely return hota h 
// }

// const addtwo = (num1, num2) => (num1 + num2) // isko bolte h implicit return ye method react me bhut kaam aayega
const addtwo = (num1, num2) => ({username : "ankit"}) 
console.log(addtwo(3,4));