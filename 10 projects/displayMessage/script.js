const message = document.querySelector('input');
const displayBtn = document.querySelector('button');
const output = document.querySelector('.messageOut');

displayBtn.addEventListener('click', displayMsg)

function displayMsg() {
    let content = message.value;
    if(content === ""){
        alert('please enter a message to be displayed')
    }else{
        output.innerText = content;
        message.value = "";
    }
    
}