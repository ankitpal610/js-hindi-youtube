# project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
console.log("hitesh")
const button = document.querySelectorAll('.button');

const body = document.querySelector('body');

// console.log(button);

button.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', (function (e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
  }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
  }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  }));
})

````


## project 2  solution

``` javascript

console.log("ankit")

const form = document.querySelector('form')

//  this usecase giveyou empty
// const hieght = parseInt(document.querySelector('#height').values);

form.addEventListener('submit', function (e){
  e.preventDefault();


  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results')

  if(height ==='' || height < 0 || isNaN(height)){
    result.innerHTML = `please give a valid height ${height}`
  } else if(weight ==='' || weight < 0 || isNaN(weight)){
    result.innerHTML = `please give valid weight ${weight}`;
  } else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    // show the result

    result.innerHTML = `<span>${bmi}</span>`
  }

})
```