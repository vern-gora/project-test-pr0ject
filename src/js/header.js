const menuOpenBtn = document.querySelector("button[data-menu-open]");
const menuCloseBtn = document.querySelector("button[data-menu-close]");
const mobMenuEl = document.querySelector(".mob-menu");

menuOpenBtn.addEventListener("click", ()=>{
    mobMenuEl.classList.toggle("visually-hidden");
    menuCloseBtn.classList.toggle("visually-hidden");
    menuOpenBtn.classList.toggle("visually-hidden");
});

menuCloseBtn.addEventListener("click",  ()=>{
    mobMenuEl.classList.toggle("visually-hidden");
    menuCloseBtn.classList.toggle("visually-hidden");
    menuOpenBtn.classList.toggle("visually-hidden");
});