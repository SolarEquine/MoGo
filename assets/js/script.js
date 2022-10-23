"use strict"
const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
let direction =0;

const wrapper = document.querySelector(".wrapper");

function toggleBurger(){
    if(menu.classList.contains("active")){
        menu.classList.toggle("active");
        setTimeout(() =>{menu.classList.toggle("visible")}, 100)
    }else{
        menu.classList.toggle("visible");
        setTimeout(() =>{menu.classList.toggle("active")}, 100)
    }
    burger.classList.toggle("active");
}

function toggleAccordion(target){
    const accordion = target.parentNode.parentNode;
    const accordionItems = accordion.querySelectorAll(".accordion__item");
    accordionItems.forEach(item => {
        item.classList.remove("active");
    });
    target.parentNode.classList.add("active");
}

function sliderAppend(event){
    if(direction === 1 ){
        const slider = event.target;
        slider.style.transition = "none";
        slider.appendChild(slider.firstElementChild);
        slider.style.transform = "translateX(0)";
        setTimeout(()=>{
            slider.style.transition = "all .2s linear";
        }, 1)
    }

}

function moveSlider(target){
    const review = target.parentNode.parentNode;
    const slider = review.querySelector(".reviews__slider");
    if (direction == 1){
        slider.addEventListener("transitionend", sliderAppend);
        slider.style.transform = "translateX(-100%)";
    }
    else{
        slider.prepend(slider.lastElementChild);
        slider.style.transition="none";
        slider.style.transform = "translateX(-100%)";

        setTimeout(()=>{
            slider.style.transition = "all .2s";
            slider.style.transform = "translateX(0)"
        }, 1)
    }
}

wrapper.addEventListener("click", (event)=>{
    if (event.target.closest(".burger-menu") || event.target.closest(".menu__item")){
        toggleBurger();
    }
    if (event.target.closest(".accordion__header")){
        toggleAccordion(event.target);
    }

    if (event.target.closest(".accordion__icon") || event.target.closest(".accordion__title") || event.target.closest(".accordion__arrow")){
        toggleAccordion(event.target.parentNode.parentNode);
    }

    if(event.target.closest(".reviews__btn_prev")){
        direction = -1;
        moveSlider(event.target);
    }

    if(event.target.closest(".reviews__btn_next")){
        direction = 1;
        moveSlider(event.target);
    }
})