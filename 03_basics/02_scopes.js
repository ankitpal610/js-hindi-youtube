var c = 300
let a = 300;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log(a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

// next video 

function one(){
    const username = "ankit"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two();
}

// one();


if(true){
    const username = "ankit"
    if(username === "ankit"){
        const website = "  youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++== Intersting  ==+++++++++++++++++++++++++++


console.log(addone(5));
function addone(num){
    return num + 1
}


// addtwo(5);
const addtwo = function(num){   // js ke andar variable kafi powerfull hoti
//  kafi kuchh hold krti h like that json value, function etc

    return num + 2

}
