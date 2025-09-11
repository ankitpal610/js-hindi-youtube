// const tinderUser = new Object()  // this type declaration show singleton object
const tinderUser = {} //this is not singleton object
// console.log(tinderUser);

tinderUser.id = "123abc" 
tinderUser.name = "ankit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "somegmail.com",
    fullname: {
        userfullname: {
            firstname : "ankit",
            lastname : "pal"
        }
    }
}
// console.log(regularUser.fullname.user fullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1,obj2} //it is also method of jaining object
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2) // intersting object assign in mdn
// console.log(obj3);
 
const obj3 = {...obj1, ...obj2}
// console.log(obj3);



const users = [
    {
        id: 1,
        email: "ankit@gmail.com"
    },
    {
        id: 1,
        email: "amlog@gmai.com"
    },
    {
        id: 1,
        email: "ankit@gmail.com" 
    },

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); 


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "ankit"
}

// console.log(course.courseInstructor);


const {courseInstructor : instructor} = course;
// console.log(courseInstructor);
console.log(instructor);


// {
//     "name":"ankit",
//     "coursename": "js in hindi",
//     "price": "free"
// }
 

// [
//     {},
//     {},
//     {}
// ]


