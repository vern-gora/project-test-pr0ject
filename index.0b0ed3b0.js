const e="https://books-backend.p.goit.global/books/category-list",t=document.querySelector(".categories-list"),o=document.querySelector(".categories-title");fetch(e).then(e=>{if(e.ok)return e.json();throw Error("Ошибка при выполнении запроса: "+e.status)}).then(s=>{if(Array.isArray(s)){let r=s.map(e=>e.list_name);r.forEach((e,o)=>{let s=document.createElement("li");s.textContent=e,s.classList.add("categories-el"),t.appendChild(s),s.addEventListener("click",e=>{e.stopPropagation()})}),o.addEventListener("click",()=>{fetch(e).then(e=>{if(e.ok)return e.json();throw Error("Ошибка при выполнении запроса: "+e.status)}).then(e=>{console.log(e)}).catch(e=>{console.log("Произошла ошибка:",e.message)})})}else console.log("Данные не содержат список категорий.")}).catch(e=>{console.log("Произошла ошибка:",e.message)});
//# sourceMappingURL=index.0b0ed3b0.js.map
