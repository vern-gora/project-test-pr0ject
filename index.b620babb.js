function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},o.parcelRequired7c6=l),l.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var a,i,l={};a=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)l[t[o]]=e[t[o]]},i=function(e){var t=l[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l("kyEFX").register(JSON.parse('{"5ZPII":"index.b620babb.js","9Vlth":"image 1@1x.9461e158.png","bPvuU":"def-img-116.85979e77.jpg","40M39":"def-img-180.caa79729.jpg","biVyF":"def-img-218.54c35d94.jpg","42GaS":"def-img-335.a5aaa25d.jpg","ktI2g":"shopping-list.0e65e5e9.js","5M4Vw":"shopping-list.e2eaba95.js"}')),l("bUb57"),l("dTazW"),l("31TCt"),l("2CRXV"),l("jJ57b");const s=document.querySelector(".go-top");window.addEventListener("scroll",function(){let e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?s.classList.add("go-top-show"):s.classList.remove("go-top-show")}),s.addEventListener("click",function e(){var t=document.getElementById("home-bestsellers-heading").offsetTop;window.pageYOffset>t&&(window.scrollBy(0,-25),setTimeout(e,0))}),l("epHO8"),l("7rYDH");var n=l("7rYDH"),r=l("jJ57b"),c={};c=new URL(l("kyEFX").resolve("9Vlth"),import.meta.url).toString();var d={};d=new URL(l("kyEFX").resolve("bPvuU"),import.meta.url).toString();var m={};m=new URL(l("kyEFX").resolve("40M39"),import.meta.url).toString();var h={};h=new URL(l("kyEFX").resolve("biVyF"),import.meta.url).toString();var u={};u=new URL(l("kyEFX").resolve("42GaS"),import.meta.url).toString();const p=document.querySelector(".book-list"),g=document.querySelector(".loader");if(p){b(p);let e=document.querySelector("[data-modal-cls]"),o=document.querySelector("[data-modal-El]");document.querySelector(".main-img"),document.querySelector(".modal-title"),document.querySelector(".modal-author"),document.querySelector(".modal-description"),document.querySelector(".modal-btn");let a=document.querySelector(".book-list"),i=document.querySelector(".modal-pop-up");a.addEventListener("click",a=>{let l=a.target.closest('[data-action="open-modal"]'),s=l.dataset.id;(0,n.searchById)(s).then(e=>{let a=!1,l=JSON.parse(localStorage.getItem("shoppingData"))||[];a=!!l.find(({_id:e})=>s===e);let n=`<div class="modal-content-block">
  <img
    class="main-img"
    src='${e.book_image}'
    alt="${e.title}"
    width="287"
    height="408"
  />
  <div class="modal-text-block">
    <h2 class="modal-title">${e.title}</h2>
    <p class="modal-author">${e.author}</p>
    <p class="modal-description">
      ${e.description}
    </p>

    <ul class="modal-list list">
      <li class="modal-item">
        <div class="modal-icon">
          <a href="${e.amazon_product_url}">
            <img
              src="${t(c)}"
              alt="amazon"
              width="62"
              height="19"
            />
          </a>
        </div>
      </li>
      <li class="modal-item">
        <div class="modal-icon">
          <img
            src="./img/services-png/image 2@1x.png"
            alt="book"
            width="33"
            height="32"
          />
        </div>
      </li>

      <li class="modal-item">
        <div class="modal-icon">
          <img
            src="./img/services-png/image 3@1x.png"
            alt="book-shop"
            width="38"
            height="36"
          />
        </div>
      </li>
    </ul>
  </div>
</div>

<button type="submit" class="modal-btn" data-id='${s}'>${a?"REMOVE FROM SHOPPING LIST":"ADD TO SHOPPING LIST"}</button>
<p class="modal-submit-text is-hidden">
  Сongratulations! You have added the book to the shopping list. To
  delete, press the button “Remove from the shopping list”.
</p>`;i.innerHTML=n;let d=i.querySelector(".modal-btn");d.addEventListener("click",r.addToShoppingListEl),o.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}),e.addEventListener("click",()=>{o.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),i.innerHTML=""})})}function b(){(0,n.searchTopBooks)().then(e=>{!function(e){g.style.display="block";let o=e.map(({list_name:e,books:o})=>`<div class="home-bestseller-list">
        <h2 class="home-category-heading">${e}</h2>
        <div class="home-category-block">
          ${o.map(({author:e,book_image:o,title:a,_id:i})=>o?`
              <div class="home-book-card" data-id="${i}" data-action="open-modal"> 
                <div class="home-book-image-container">
                  <img src="${o}" alt="${a}" class="home-book-image">
                      <div class="home-book-overlay">
                        <div class="home-book-content">Quick view</div>
                      </div>
                </div>
                <h2 class="home-book-title">${a}</h2>
                <h3 class="home-book-author">${e}</h3>
              </div>`:`<li class="home-book-card" data-id="${i}" data-action="open-modal"> 
          <img srcset="
          ${t(d)} 116w,
          ${t(m)} 180w,
          ${t(h)} 218w,
          ${t(u)} 335w
              "
          sizes="
          (max-width: 375px) 116px,
          (max-width: 768px) 335px,
          (max-width: 1440px) 218px,
          180px
          "  alt="${a}" class="home-book-image">
          <h2 class="home-book-title">${a}</h2>
          <h3 class="home-book-author">${e}</h3>
        </li>`).join("")}
          <button class="see-more" data-category="${e}">See more</button>
        </div>
      </div>`).join("");g.style.display="none",p.innerHTML=o;let a=document.querySelectorAll(".see-more");a.forEach(e=>{e.addEventListener("click",e=>{let t=e.currentTarget;v=t.dataset.category,(0,n.searchCategory)(v).then(e=>f(e,p,v))})})}(e)}).catch(e=>{console.log(e)})}let v="";function f(e,o){g.style.display="block";let a=`<h2 class="category-name-heading" id="category-heading">${v}</h2><div class="test">`+e.map(({author:e,image:o,title:a,id:i})=>o?`<div class="home-card" data-id="${i}"  data-action="open-modal">
                <img src="${o}" alt="${a}" class="home-book-image">
                <h2 class="home-book-title">${a}</h2>
                <h3 class="home-book-author">${e}</h3>
              </div>`:`<li class="home-card" data-id="${i}"  data-action="open-modal">
            <img  srcset="
            ${t(d)} 116w,
            ${t(m)} 180w,
            ${t(h)} 218w,
            ${t(u)} 335w
                "
            sizes="
            (max-width: 375px) 116px,
            (max-width: 768px) 335px,
            (max-width: 1440px) 218px,
            180px
            "
            src="${t(u)}"
            alt="${a}" class="home-book-image">
            <h2 class="home-book-title">${a}</h2>
            <h3 class="home-book-author">${e}</h3>
            </li>`).join("");o.innerHTML=a;let i=document.getElementById("category-heading"),l=i.textContent.split(" "),s=l.pop(),n=l.join(" ")+' <span class="books-design">'+s+"</span>";i.innerHTML=n}var n=l("7rYDH");const y=document.querySelector(".categories-list"),k=document.querySelector(".book-list");function w(e){let t=document.querySelector(".categories-el.active");t&&t.classList.remove("active"),e.classList.add("active")}fetch("https://books-backend.p.goit.global/books/category-list").then(e=>{if(e.ok)return e.json();throw Error("Ошибка при выполнении запроса: "+e.status)}).then(e=>{if(Array.isArray(e)){let t=e.map(e=>e.list_name),o=document.querySelector(".categories-title");o.addEventListener("click",()=>{w(o),b()}),t.forEach((e,t)=>{let o=document.createElement("li");o.textContent=e,o.classList.add("categories-el"),y.appendChild(o),o.addEventListener("click",e=>{let t=e.target;w(t);let o=t.textContent;(0,n.searchCategory)(o).then(e=>f(e,k))})})}});
//# sourceMappingURL=index.b620babb.js.map
