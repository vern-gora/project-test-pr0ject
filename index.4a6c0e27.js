!function(){function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},o.parcelRequired7c6=l),l.register("iE7OH",function(t,o){"use strict";e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var a,i,l={};a=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)l[t[o]]=e[t[o]]},i=function(e){var t=l[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l.register("aNJCr",function(t,o){e(t.exports,"getBundleURL",function(){return a},function(e){return a=e});"use strict";var a,i={};a=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),l("iE7OH").register(JSON.parse('{"EVgbq":"index.4a6c0e27.js","itsFP":"image 1@1x.9461e158.png","fXMcW":"image 2@1x.57ecc8dc.png","7yY2c":"image 3@1x.5b660ef4.png","4indD":"def-img-116.85979e77.jpg","jUckX":"def-img-180.caa79729.jpg","2nTN1":"def-img-218.54c35d94.jpg","afKbe":"def-img-335.a5aaa25d.jpg","7gYNy":"shopping-list.9e3f5639.js","bvaVv":"shopping-list.b4de30e7.js"}')),l("i8Q71"),l("xpKCW"),l("1A2YF"),l("5bm8G"),l("4WFAO");let s=document.querySelector(".go-top");window.addEventListener("scroll",function(){let e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?s.classList.add("go-top-show"):s.classList.remove("go-top-show")}),s.addEventListener("click",function e(){var t=document.getElementById("home-bestsellers-heading").offsetTop;window.pageYOffset>t&&(window.scrollBy(0,-25),setTimeout(e,0))}),l("7hKzD"),l("b7ONl");var n=l("b7ONl"),r=l("4WFAO"),c={};c=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("itsFP");var d={};d=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("fXMcW");var m={};m=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("7yY2c");var u={};u=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("4indD");var h={};h=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("jUckX");var g={};g=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("2nTN1");var p={};p=l("aNJCr").getBundleURL("EVgbq")+l("iE7OH").resolve("afKbe");let b=document.querySelector(".book-list"),f=document.querySelector(".loader");if(b){v(b);let e=document.querySelector("[data-modal-cls]"),o=document.querySelector("[data-modal-El]");document.querySelector(".main-img"),document.querySelector(".modal-title"),document.querySelector(".modal-author"),document.querySelector(".modal-description"),document.querySelector(".modal-btn");let a=document.querySelector(".book-list"),i=document.querySelector(".modal-pop-up");a.addEventListener("click",a=>{let l=a.target.closest('[data-action="open-modal"]'),s=l.dataset.id;(0,n.searchById)(s).then(e=>{let a=!1,l=JSON.parse(localStorage.getItem("shoppingData"))||[];a=!!l.find(({_id:e})=>s===e);let n=`<div class="modal-content-block">
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
                <a href="${e.buy_links[1].url}" target="_blank">
                  <img class="modal-icon-img"
                    src="${t(d)}"
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
                    src="${t(m)}"
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
</p>`;i.innerHTML=n;let u=i.querySelector(".modal-btn");u.addEventListener("click",r.addToShoppingListEl),o.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}),e.addEventListener("click",()=>{o.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),i.innerHTML=""})})}function v(){(0,n.searchTopBooks)().then(e=>{!function(e){f.style.display="block";let o=e.map(({list_name:e,books:o})=>`<div class="home-bestseller-list">
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
          ${t(u)} 116w,
          ${t(h)} 180w,
          ${t(g)} 218w,
          ${t(p)} 335w
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
      </div>`).join("");f.style.display="none",b.innerHTML=o;let a=document.querySelectorAll(".see-more");a.forEach(e=>{e.addEventListener("click",e=>{let t=e.currentTarget;y=t.dataset.category,(0,n.searchCategory)(y).then(e=>k(e,b,y))})})}(e)}).catch(e=>{console.log(e)})}let y="";function k(e,o){f.style.display="block";let a=`<h2 class="category-name-heading" id="category-heading">${y}</h2><div class="test">`+e.map(({author:e,image:o,title:a,id:i})=>o?`<div class="home-card" data-id="${i}"  data-action="open-modal">
                <img src="${o}" alt="${a}" class="home-book-image">
                <h2 class="home-book-title">${a}</h2>
                <h3 class="home-book-author">${e}</h3>
              </div>`:`<li class="home-card" data-id="${i}"  data-action="open-modal">
            <img  srcset="
            ${t(u)} 116w,
            ${t(h)} 180w,
            ${t(g)} 218w,
            ${t(p)} 335w
                "
            sizes="
            (max-width: 375px) 116px,
            (max-width: 768px) 335px,
            (max-width: 1440px) 218px,
            180px
            "
            src="${t(p)}"
            alt="${a}" class="home-book-image">
            <h2 class="home-book-title">${a}</h2>
            <h3 class="home-book-author">${e}</h3>
            </li>`).join("");o.innerHTML=a;let i=document.getElementById("category-heading"),l=i.textContent.split(" "),s=l.pop(),n=l.join(" ")+' <span class="books-design">'+s+"</span>";i.innerHTML=n}var n=l("b7ONl");let E=document.querySelector(".categories-list"),$=document.querySelector(".book-list");function w(e){let t=document.querySelector(".categories-el.active");t&&t.classList.remove("active"),e.classList.add("active")}fetch("https://books-backend.p.goit.global/books/category-list").then(e=>{if(e.ok)return e.json();throw Error("Ошибка при выполнении запроса: "+e.status)}).then(e=>{if(Array.isArray(e)){let t=e.map(e=>e.list_name),o=document.querySelector(".categories-title");o.addEventListener("click",()=>{w(o),v()}),t.forEach((e,t)=>{let o=document.createElement("li");o.textContent=e,o.classList.add("categories-el"),E.appendChild(o),o.addEventListener("click",e=>{let t=e.target;w(t);let o=t.textContent;(0,n.searchCategory)(o).then(e=>k(e,$))})})}})}();
//# sourceMappingURL=index.4a6c0e27.js.map
