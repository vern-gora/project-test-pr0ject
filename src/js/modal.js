const modalOpenBtn = document.querySelectorAll('.book-card .see-morebtn');
const modalCloseBtn = document.querySelector("[data-modal-cls]");
const modalEl = document.querySelector("[data-modal-El]");
const imageEl = document.querySelector(".main-img");
const titleEl = document.querySelector(".modal-title");
const authorEl = document.querySelector(".modal-author");
const descriptionEl = document.querySelector(".modal-description");
const savedBookInfo = localStorage.getItem("bookinfo");
const parsedBookInfo = JSON.parse(savedBookInfo);



modalOpenBtn.forEach(btn => 
    btn.addEventListener("click", () => {
        modalEl.classList.toggle("is-hidden");
        document.body.classList.toggle('no-scroll');
        imageEl.src = parsedBookInfo.image;
        titleEl.textContent = parsedBookInfo.title;
        authorEl.textContent = parsedBookInfo.author;
    }
));

modalCloseBtn.addEventListener("click",  ()=>{
    modalEl.classList.toggle("is-hidden");
    document.body.classList.toggle('no-scroll');
    
});