window.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".categories-list");fetch("https://books-backend.p.goit.global/books/category-list").then((function(t){if(t.ok)return t.json();throw new Error("Ошибка при выполнении запроса: "+t.status)})).then((function(e){Array.isArray(e)?e.map((function(t){return t.list_name})).forEach((function(e,n){var o=document.createElement("li");o.textContent=e,o.classList.add("categories-el"),t.appendChild(o),o.addEventListener("click",(function(t){t.stopPropagation()}))})):console.log("Данные не содержат список категорий.")})).catch((function(t){console.log("Произошла ошибка:",t.message)}))}));
//# sourceMappingURL=index.f7d98f11.js.map
