const body = document.querySelector('body');
const button = document.querySelector('button');
const display = document.querySelector('span');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener('click', generateHexCode);

function generateHexCode() {
    let hexcolor = "#";
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hex.length)
        hexcolor += hex[random];  
    }
    body.style.backgroundColor = hexcolor;
    display.innerText = hexcolor;
    console.log(hexcolor)
}


