//  for of

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}


// Maps

const map = new Map() // map unique value ke liye jana jate h
map.set('IN',"India")
map.set('USA', "United State of America")
map.set('fr', "france")
map.set('IN', "India")

// console.log(map);


for (const keys of map) {
    // console.log(keys);  // iss tarike se pura ka pura array ke form me aa jata h  aur
    //  iteration standard banane ke liye har pair ko [key,value] array me wrap karke dena easy hai .
    
    // console.log(keys[1],keys[0]);
}

for (const [keys,values] of map) {
    //  console.log(keys, ':-' , values); // isse destructuring direct ho jata h
}



//  object jo h map se iterable nhi h

const myobject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [keys, value] of myobject) {
     console.log(key, ':-' , value);

}