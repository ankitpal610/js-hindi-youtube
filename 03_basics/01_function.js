function sayMyname(){
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("i");
    console.log("t");
}

// sayMyname();

// function addTwoNumbers(number1,number2){

//     console.log(number1 + number2);
// }

// addTwoNumbers(3,null)  //3,a => 3a ; 3,"4" =>34 ; 3, null => 3
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
console.log(loginUserMessage());  //interview