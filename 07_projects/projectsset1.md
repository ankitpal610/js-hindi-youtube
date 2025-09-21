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