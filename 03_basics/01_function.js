function sayMyname(){
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("i");
    console.log("t");
}
// sayMyname // agr ese print krate h to error nhi aata 
// iska mtlb h fuction vha rhta mtlb refrece bta rha h 

// sayMyname();

function addTwoNumbers(number1,number2){

    console.log(number1 + number2);
}

// addTwoNumbers(3,8)  //3,a => 3a ; 3,"4" =>34 ; 3, null => 3
// const result = addTwoNumbers(3,5);
// console.log("Result : ",result);

function addTwoNumbers(number1,number2){

    // let result = number1 + number2
    // return result;
    return number1 + number2
}

// const result = addTwoNumbers(3,5);
// console.log("Result : ",result);


function loginUserMessage(username = "sam"){
    if(username === undefined){  // we use !username just like professional
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ankit"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());  //interview



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400));

const user = {
    username: "hitesh",
    prices: 199
} 

function handleObject(anyobject){ // function se onbject ko handle 
// ko kaise krete h
    console.log(`username is ${anyobject.username} and price is 
        ${anyobject.price}`);
}

// handleObject(user);
// handleObject({
//     username: "sam",
//     price: 399
// })


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,400,500,1000]));