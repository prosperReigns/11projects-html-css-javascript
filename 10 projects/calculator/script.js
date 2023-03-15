const screen = document.querySelector('.screen');
const btn = document.querySelectorAll('.btn');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const backspace = document.querySelector('.backspace');

//iliterate over btn nodelist
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function () {
    screen.innerText += btn[i].getAttribute('data-operands');    ;
    });
}

// evaluate expresion inside a string
equal.addEventListener('click', evaluate);

function evaluate() {
    if(screen.innerText == ""){
        screen.innerText = "";
    }else{
        let result = eval(screen.innerText);
        screen.innerText = result;
    }
    
}

// clear output
clear.addEventListener('click', clearScreen);

function clearScreen() {
    screen.innerText = "";
}

// remove last inputed number
backspace.addEventListener('click', removeLastInput)

function removeLastInput() {
    let currentOutput = screen.innerText;
    let newOutLength = currentOutput.length - 1;
    let newOutput = currentOutput.replace(currentOutput[newOutLength], "")
    screen.innerText = newOutput;
}

