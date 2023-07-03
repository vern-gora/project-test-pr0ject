import {searchById} from './api';

const modalOpenBtn = document.querySelectorAll('.book-card');
const modalCloseBtn = document.querySelector("[data-modal-cls]");
const modalEl = document.querySelector("[data-modal-El]");
const imageEl = document.querySelector(".main-img");
const titleEl = document.querySelector(".modal-title");
const authorEl = document.querySelector(".modal-author");
const descriptionEl = document.querySelector(".modal-description");
const addToListBtn = document.querySelector(".modal-btn");


modalOpenBtn.forEach(btn => 
    btn.addEventListener("click", () => {
        const savedBookId = localStorage.getItem("bookinfo");
        const parsedBookId = JSON.parse(savedBookId);
        const bookId = parsedBookId.id;
        searchById(bookId).then(data => { 
            console.log(data.book_image, data.author, data.title, data.description);
            imageEl.src = data.book_image;
            authorEl.textContent = data.author;
            titleEl.textContent = data.title;
            descriptionEl.textContent = data.description;
        })
        modalEl.classList.remove("is-hidden");
        document.body.classList.add('no-scroll');
    }
));


addToListBtn.addEventListener("click", () => { 
    const image = imageEl.src;
    const title = titleEl.textContent;
    const author = authorEl.textContent;
    const description = descriptionEl.textContent;

    const addToListData = {
        image,
        title,
        author,
        description,
    }

    localStorage.setItem('addtolistinfo', JSON.stringify(addToListData));
})

          

modalCloseBtn.addEventListener("click", () => {
    modalEl.classList.add("is-hidden");
    document.body.classList.remove('no-scroll');
    localStorage.removeItem("bookinfo");
    imageEl.src = "";
    authorEl.textContent = "";
    titleEl.textContent = "";
    descriptionEl.textContent = "";
});




