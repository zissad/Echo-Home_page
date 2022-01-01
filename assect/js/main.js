const slider = document.querySelector('.slider-slider-container');

const left_arrow = document.querySelector('.left-btn');
const right_arrow = document.querySelector('.right-btn');
const radio1 = document.querySelector('#radio1');
const radio2 = document.querySelector('#radio2');
const radio3 = document.querySelector('#radio3');

radio1.onclick = () => {
    radio1.classList.add('active')
    radio2.classList.remove('active')
    radio3.classList.remove('active')
    slider.scrollLeft = 0;
}
radio2.onclick = () => {
    radio2.classList.add('active')
    radio1.classList.remove('active')
    radio3.classList.remove('active')
    slider.scrollLeft = 1530;
}
radio3.onclick = () => {
    radio3.classList.add('active')
    radio2.classList.remove('active')
    radio1.classList.remove('active')
    slider.scrollLeft = 2333;
}

left_arrow.addEventListener('click', () => {
    slider.scrollLeft -= 487;
})

right_arrow.addEventListener('click', () => {
    slider.scrollLeft += 487;
})

const maxScrollWidth = slider.scrollWidth - slider.clientWidth;

function autoPlay() {
    if(slider.scrollLeft > (maxScrollWidth - 1)){
        slider.scrollLeft -= maxScrollWidth;
    }
    else {
        slider.scrollLeft += 487;
    }
}
let play =  setInterval(autoPlay, 5000);

setInterval(() => {
    if(slider.scrollLeft >= 1630){
        radio3.classList.add('active')
        radio2.classList.remove('active')
        radio1.classList.remove('active')
    } 
    else if(slider.scrollLeft >= 700){
        radio2.classList.add('active')
        radio1.classList.remove('active')
        radio3.classList.remove('active')
    } 
    else if(slider.scrollLeft <= 700){
        radio1.classList.add('active')
        radio2.classList.remove('active')
        radio3.classList.remove('active')
    }
}, 100);

const navBar = document.querySelector('.fa-bars');
const menu = document.querySelector('nav .container ul')

navBar.onclick = () => {
    navBar.classList.toggle('active')
    menu.classList.toggle('active')
}