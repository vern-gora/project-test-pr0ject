export const menuOpenBtn = document.querySelector("button[data-menu-open]");
export const menuCloseBtn = document.querySelector("button[data-menu-close]");
export const mobMenuEl = document.querySelector(".mob-menu");
const lightLogoEl = document.querySelector("#logo-light");
const darkLogoEl = document.querySelector("#logo-dark");

menuOpenBtn.addEventListener("click", ()=>{
    mobMenuEl.classList.toggle("visually-hidden");
    menuCloseBtn.classList.toggle("visually-hidden");
    menuOpenBtn.classList.toggle("visually-hidden");
    document.body.classList.toggle("no-scroll");
});

menuCloseBtn.addEventListener("click",  ()=>{
    mobMenuEl.classList.toggle("visually-hidden");
    menuCloseBtn.classList.toggle("visually-hidden");
    menuOpenBtn.classList.toggle("visually-hidden");
    document.body.classList.toggle("no-scroll");
});

const switchTheme = () =>{
const rootEl = document.documentElement;
let dataTheme = rootEl.getAttribute("data-theme"), newTheme;
newTheme = (dataTheme==="light"?"dark":"light");
rootEl.setAttribute("data-theme", newTheme);
lightLogoEl.classList.toggle("visually-hidden");
darkLogoEl.classList.toggle("visually-hidden");
localStorage.setItem("theme", newTheme)
}

document.querySelector(".theme-switcher").addEventListener("click",switchTheme);
