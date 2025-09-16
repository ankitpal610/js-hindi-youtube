const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumber.map( (num) => {
//     return num + 10   // ye value ko return krta h
// })
// console.log(newNums);


const newNums = myNumber
                        .map( ( nums) => nums*10 )
                        .map((sum) => sum + 1)
                        .filter( (num) => num >=40)

console.log(newNums);
