"use strict"
const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const sliders = document.querySelectorAll(".reviews__slider");
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
    accordion = target.parentNode.parentNode;
    accordionItems = accordion.querySelectorAll(".accordion__item");
    accordionItems.forEach(item => {
        item.classList.remove("active");
    });
    target.parentNode.classList.add("active");
}

function moveSlider(target){
    const review = target.parentNode.parentNode;
    const slider = review.querySelector(".reviews__slider");
    if (direction == 1){
        slider.style.transform = "translateX(-100%)";
        slider.style.justifyContent = "flex-start";

        setTimeout(()=>{
            slider.appendChild(slider.firstElementChild);
            slider.style.transform = "translateX(0)";
            
            slider.style.transition = "none";
            slider.style.transform = "translateX(0)";
            setTimeout(()=>{
              slider.style.transition = "all .2s";
            }, 1);
        }, 200);

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

    if(event.target.closest(".reviews__btn_prev")){
        direction = -1;
        moveSlider(event.target);
    }

    if(event.target.closest(".reviews__btn_next")){
        direction = 1;
        moveSlider(event.target);
    }
})