const body = document.querySelector('body')
const button = document.querySelector('button')
const p = document.querySelector('p')
h = document.querySelector('h3')

const index=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

body.style.background="red";

const changeColor = () =>{
    let heh = '#'

    for(i = 0; i< 6; i++){
    var colorIndex =Math.floor((Math.random()* index.length));
    heh += index[colorIndex]
    }

    body.style.background = heh
    h.innerHTML = `<h1> Fon: ${heh} </h1>`
}

button.addEventListener('click', changeColor)