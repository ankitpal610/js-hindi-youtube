// Dates

let myDate  = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// //lacale string are important
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);  // isko yaad rakhna h 



// let  myCreatedDate = new Date(2025,8,25);// this is first methood
// let  myCreatedDate = new Date("09-25-2025");// this formate is mm-dd-yyyy
// let  myCreatedDate = new Date("2025-09-09");// this formate is yyyy-mm-dd
// console.log(myCreatedDate.toLocaleString());

// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()  // this is very important for quizes

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());// this is in milisecond
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate.toLocaleString());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long"
});