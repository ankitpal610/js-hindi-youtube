// Imediately Invoked Function Expressions (IIFE)


(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})(); // for interview => global scope ke pollution
//  se problem hoti kii bar to uss global scope ke variable h ya phir jo bhi vha declaration h
//  uske pollution ko hatane ke liye use krte h bachne
//  ke liye use krte iife


// if two iife likhne ke liye semicolon ka use krte h

( (name) => {
    // un-named iife 
    console.log(`DB  CONNECTED TWO ${name}`);
})('ankit');