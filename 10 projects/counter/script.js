let counter = document.querySelector('.count');
const add = document.querySelector('.add');
const minus = document.querySelector('.minus');

let count ="1";

add.addEventListener('click', increamentCount);
minus.addEventListener('click', decreamentCount);

function increamentCount(){
    counter.innerText = count++;
    if(counter.innerText > "0"){
        counter.style.color = "green";
    }else if(counter.innerText == "0"){
        counter.style.color = "white";
    }

    counter.animate([{opacity: 0.2},{opacity:1}], {fill: 'forwards', duration: 500, easing:'ease-out'})
}

function decreamentCount(){
    counter.innerText = count--;
    if(counter.innerText < "0"){
        counter.style.color = "red";
    }else if(counter.innerText == "0"){
        counter.style.color = "white";
    }
    counter.animate([{opacity: 0.2},{opacity:1}], {fill: 'forwards', duration: 500, easing:'ease-out'})
}
