const isUserLoggedIn = true
const temperature = 42;

if(temperature === 50){
    console.log("less than 50");
    
} else{
    console.log("temperature is greater than 50");

}
console.log("Execute");

//  <, >, <=, >=, ==, !=, ===, !==


const score = 800

if(score > 200) {
    const power = "fly"
    console.log(`User power: ${power}`);    
}
    // console.log(`User power: ${power}`);    

const balace = 200;

// if(balace > 500)  console.log("test"),console.log("ankit");

if (balace < 500){
    console.log("less than 500");
    
} else if(balace < 750){
    console.log("less than 750");
    
} else if(balace < 900){
    console.log("less than 900");
    
} else{
    console.log("less than 1200");
    
}

const UserLoggedIn = true
const debitCard = true

if(UserLoggedIn && debitCard){
    console.log(" Allow to buy course");
    
}

const logedInFromGoogle = false
const UserLoggedInFromEmail = true

if(logedInFromGoogle || UserLoggedInFromEmail){
    console.log("user logged in");
    
}
