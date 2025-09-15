const coding = ['js',"ruby","java","python","cpp"]

// coding.forEach( function (item) {
//      console.log(item);
     
// })


// coding.forEach( (ite) => {
//      console.log(ite);
     
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  // agr function khi aur ban h to khali reference dena hota h baki printing kaam khud kr lega 

// coding.forEach( (item,index,arr) => {
//     console.log(item, index, arr);
// })


const mycoding = [
    { 
        languageName: "java",
        languageFileName: "js"
    },
    {
       languageName: "java",
        languageFileName: "java" 
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

mycoding.forEach( (item) => {
    console.log(item.languageFileName);
    
})
