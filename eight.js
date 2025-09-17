const myNums = [1,2,3]

// const mytotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
    
// },0)            // yha pr readibility high h

// console.log(mytotal);

const mytotal = myNums.reduce( (acc, currval) => acc+currval,0)
// yha pr smartness h
console.log(mytotal);



const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "py course",
        price: 999
    },
    {
        itemName : "data science course",
        price: 5999
    },
    {
        itemName : "mobile dev course",
        price: 12999
    },

]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)

console.log(priceToPay);