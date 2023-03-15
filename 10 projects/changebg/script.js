const body = document.querySelector("body");
const button = document.querySelector("button");

const colors =['red', 'blue', 'green', 'cyan', 'orange', 'brown'];

button.addEventListener("click", changeBb);

function changeBb() {
    let random = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[random];
}