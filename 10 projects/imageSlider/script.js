const container = document.querySelector('.container');
const btnPrev = document.querySelector('.btnPrev');
const btnNext = document.querySelector('.btnNext');

let counter = 0;

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);



function nextSlide() {
    let random = Math.floor(Math.random() * 15);

    if(random == 0){
        random = 1;
    }

    container.style.backgroundImage = `url(images/bg-${random}.jpg)`;
    container.animate([{opacity: 0.2},{opacity: 1}], {duration: 1000, fill: "forwards"})
}

function prevSlide()  {
    let random = Math.floor(Math.random() * 15);

    if(random == 0){
        random = 1;
    }

    container.style.backgroundImage = `url(images/bg-${random}.jpg)`;
    container.animate([{opacity: 0.2},{opacity: 1}], {duration: 1000, fill: "forwards"})
}
