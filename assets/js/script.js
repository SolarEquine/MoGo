const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

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

wrapper.addEventListener("click", (event)=>{
    if (event.target.closest(".burger-menu") || event.target.closest(".menu__item")){
        toggleBurger();
    }
    if (event.target.closest(".accordion__header")){
        toggleAccordion(event.target);
    }
})