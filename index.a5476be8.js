!function(){function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},o.parcelRequired7c6=l),l.register("iE7OH",function(t,o){"use strict";e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var a,i,l={};a=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)l[t[o]]=e[t[o]]},i=function(e){var t=l[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l.register("aNJCr",function(t,o){e(t.exports,"getBundleURL",function(){return a},function(e){return a=e});"use strict";var a,i={};a=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),l("iE7OH").register(JSON.parse('{"EVgbq":"index.a5476be8.js","itsFP":"image 1@1x.9461e158.png","gZjVM":"image 1@2x.7de16bfc.png","fXMcW":"image 2@1x.57ecc8dc.png","75qgu":"image 2@2x.061446c7.png","7yY2c":"image 3@1x.5b660ef4.png","5PEO2":"image 3@2x.a9e70fc5.png","4indD":"def-img-116.85979e77.jpg","jUckX":"def-img-180.caa79729.jpg","2nTN1":"def-img-218.54c35d94.jpg","afKbe":"def-img-335.a5aaa25d.jpg","7gYNy":"shopping-list.4a372cab.js","bvaVv":"shopping-list.c02728d9.js"}')),l("i8Q71"),l("xpKCW"),l("1A2YF"),l("5bm8G"),l("4WFAO");let s=document.querySelector(".go-top");window.addEventListener("scroll",function(){let e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?s.classList.add("go-top-show"):s.classList.remove("go-top-show")}),s.addEventListener("click",function e(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(e,0))}),l("7hKzD"),l("b7ONl");var r=l("b7ONl"),n=l("4WFAO"),c={};c=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("itsFP");var d={};d=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("gZjVM");var m={};m=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("fXMcW");var u={};u=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("75qgu");var h={};h=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("7yY2c");var g={};g=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("5PEO2");var p={};p=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("4indD");var b={};b=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("jUckX");var f={};f=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("2nTN1");var v={};v=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("afKbe");let E=document.querySelector(".book-list"),k=document.querySelector(".loader");if(E){y(E);let e=document.querySelector("[data-modal-cls]"),o=document.querySelector("[data-modal-El]");document.querySelector(".main-img"),document.querySelector(".modal-title"),document.querySelector(".modal-author"),document.querySelector(".modal-description"),document.querySelector(".modal-btn");let a=document.querySelector(".book-list"),i=document.querySelector(".modal-pop-up");a.addEventListener("click",a=>{let l=a.target.closest('[data-action="open-modal"]'),s=l.dataset.id;(0,r.searchById)(s).then(e=>{let a=!1,l=JSON.parse(localStorage.getItem("shoppingData"))||[];a=!!l.find(({_id:e})=>s===e);let r=`<div class="modal-content-block">
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
              <div class="modal-icon black_v">
                <a href="${e.amazon_product_url}" target="_blank">
                  <img class="modal-icon-img"
                    src="${t(c)}" srcset="${t(c)} 1x, ${t(d)} 2x"
                    alt="amazon"
                    width="62"
                    height="19"
                  />
                </a>
              </div>
            </li>
            <li class="modal-item">
              <div class="modal-icon">
                <a href="${e.buy_links[1].url}" target="_blank">
                  <img class="modal-icon-img"
                    src="${t(m)}" srcset="${t(m)} 1x, ${t(u)} 2x"
                    alt="apple books"
                    width="33"
                    height="32"
                  />
                </a>
              </div>
            </li>

            <li class="modal-item">
              <div class="modal-icon">
                <a href="${e.buy_links[4].url}" target="_blank">
                  <img class="modal-icon-img"
                    src="${t(h)}" srcset="${t(h)} 1x, ${t(g)} 2x"
                    alt="book shop"
                    width="38"
                    height="36"
                  />
                </a>
              </div>
            </li>
          </ul>
  </div>
</div>

<button type="submit" class="modal-btn" data-id='${s}'>${a?"REMOVE FROM SHOPPING LIST":"ADD TO SHOPPING LIST"}</button>
<p class="modal-submit-text is-hidden">
  Сongratulations! You have added the book to the shopping list. To
  delete, press the button “Remove from the shopping list”.
</p>`;i.innerHTML=r;let p=i.querySelector(".modal-btn");p.addEventListener("click",n.addToShoppingListEl),o.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}),e.addEventListener("click",()=>{o.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),i.innerHTML=""})})}function y(){(0,r.searchTopBooks)().then(e=>{!function(e){k.style.display="block";let o=e.map(({list_name:e,books:o})=>`<div class="home-bestseller-list">
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
          ${t(p)} 116w,
          ${t(b)} 180w,
          ${t(f)} 218w,
          ${t(v)} 335w
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
      </div>`).join("");k.style.display="none";let a=`<h2 class="home-bestsellers-heading" id="home-bestsellers-heading">
  Best Sellers<span class="books-design"> Books</span>
  </h2>${o}`;E.innerHTML=a;let i=document.querySelectorAll(".see-more");i.forEach(e=>{e.addEventListener("click",e=>{let t=e.currentTarget,o=t.dataset.category;(0,r.searchCategory)(o).then(e=>$(e,E,o))})})}(e)}).catch(e=>{console.log(e)})}function $(e,o,a){k.style.display="block";let i=`<h2 class="category-name-heading" id="category-heading">${a}</h2><div class="test">`+e.map(({author:e,image:o,title:a,id:i})=>o?`<div class="home-card" data-id="${i}"  data-action="open-modal">
                <img src="${o}" alt="${a}" class="home-book-image">
                <h2 class="home-book-title">${a}</h2>
                <h3 class="home-book-author">${e}</h3>
              </div>`:`<li class="home-card" data-id="${i}"  data-action="open-modal">
            <img  srcset="
            ${t(p)} 116w,
            ${t(b)} 180w,
            ${t(f)} 218w,
            ${t(v)} 335w
                "
            sizes="
            (max-width: 375px) 116px,
            (max-width: 768px) 335px,
            (max-width: 1440px) 218px,
            180px
            "
            src="${t(v)}"
            alt="${a}" class="home-book-image">
            <h2 class="home-book-title">${a}</h2>
            <h3 class="home-book-author">${e}</h3>
            </li>`).join("");o.innerHTML=i;let l=document.getElementById("category-heading"),s=l.textContent.split(" "),r=s.pop(),n=s.join(" ")+' <span class="books-design">'+r+"</span>";l.innerHTML=n}var r=l("b7ONl");let x=document.querySelector(".categories-list"),H=document.querySelector(".book-list");function _(e){let t=document.querySelector(".categories-el.active");t&&t.classList.remove("active"),e.classList.add("active")}fetch("https://books-backend.p.goit.global/books/category-list").then(e=>{if(e.ok)return e.json();throw Error("Ошибка при выполнении запроса: "+e.status)}).then(e=>{if(Array.isArray(e)){let t=e.map(e=>e.list_name),o=document.querySelector(".categories-title");o.addEventListener("click",()=>{_(o),y()}),t.forEach((e,t)=>{let o=document.createElement("li");o.textContent=e,o.classList.add("categories-el"),x.appendChild(o),o.addEventListener("click",e=>{let t=e.target;_(t);let o=t.textContent;(0,r.searchCategory)(o).then(e=>$(e,H,o))})})}})}();
//# sourceMappingURL=index.a5476be8.js.map
