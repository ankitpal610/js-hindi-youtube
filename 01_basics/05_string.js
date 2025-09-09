const name = "ankit"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my name repo count is ${repocount}`);


const gamename = new String('hitesh-hc-ankit')
 
console.log(gamename[0]);
console.log(gamename.__proto__);


console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newString = gamename.substring(0,4);
console.log(newString);


const anotherString = gamename.slice(-8,4)
console.log(anotherString);


const newStringone = "     ankit    "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://ankit.com/ankit%20pal"

console.log(url.replace('%20','-'));

console.log(url.includes('sindoor'));
console.log(gamename.split('-'));