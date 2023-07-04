// import axios from 'axios';

import {
  searchTopBooks,
  searchAllCategory,
  searchById,
  searchCategory,
} from './api.js';

import defImg116 from '../img/default-img/def-img-116.jpg';
import defImg180 from '../img/default-img/def-img-180.jpg';
import defImg218 from '../img/default-img/def-img-218.jpg';
import defImg335 from '../img/default-img/def-img-335.jpg';
// const bestSellersUrl = 'https://books-backend.p.goit.global/books/top-books';
// const categoriesUrl = 'https://books-backend.p.goit.global/books/category-list';
const testCategory = 'Series Books';
const bookId = '643282b1e85766588626a083';
const bookList = document.querySelector('.book-list');
const loader = document.querySelector('.loader');

// async function searchTopBooks(bookUrl) {
//   try {
//     const response = await axios.get(`${bookUrl}`);
//     const books = response.data;

//     // const bookData = books.map(book => {
//     //   const currentBook = book.books[0];
//     //   return {
//     //     image: currentBook.book_image,
//     //     title: currentBook.title,
//     //     author: currentBook.author,
//     //     id: currentBook._id,
//     //   };
//     // });
//     // console.log(bookData);
//     console.log(books);
//     return books;
//   } catch (error) {
//     console.log(error);
//     throw new Error('Failed to find books');
//   }
// }

// async function searchAllCategory() {
//   try {
//     const response = await axios.get(`${categoriesUrl}`);
//     const categories = response.data;

//     const categoryData = categories.map(elem => {
//       const currentCategory = elem;
//       return {
//         name: currentCategory.list_name,
//       };
//     });
//     console.log(categoryData);

//     return categories;
//   } catch (error) {
//     console.log(error);
//     throw new Error('There is no such category');
//   }
// }
searchAllCategory();

// async function searchCategory(selectedCategory) {
//   try {
//     const response = await axios.get(
//       `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
//     );
//     const categories = response.data;

//     const selectedCategoryEl = categories.map(el => {
//       const currentBookEl = el;
//       return {
//         image: currentBookEl.book_image,
//         title: currentBookEl.title,
//         author: currentBookEl.author,
//         id: currentBookEl._id,
//         description: currentBookEl.description,
//         links: currentBookEl.buy_links,
//       };
//     });
//     console.log(selectedCategoryEl);

//     return selectedCategoryEl;
//   } catch (error) {
//     console.log(error);
//     throw new Error('There is no such category');
//   }
// }

searchCategory(testCategory);

// async function searchById(id) {
//   try {
//     const response = await axios.get(
//       `https://books-backend.p.goit.global/books/${id}`
//     );
//     const booksId = response.data;

//     console.log(booksId);
//     return booksId;
//   } catch (error) {
//     console.log(error);
//     throw new Error('There is no such id');
//   }
// }
searchById(bookId);

// searchTopBooks(bestSellersUrl).then(data => {
//   console.log(data);
//   renderBooks(data);
// });

//

searchTopBooks()
  .then(data => {
    console.log(data);
    renderBooks(data);
  })
  .catch(error => {
    console.log(error);
  });

function renderBooks(array) {
  loader.style.display = 'block';
  const markup = array
    .map(
      ({ list_name, books }) =>
        `<li class="home-bestseller-list">
        <h2 class="home-category-heading">${list_name}</h2>
        <ul class="home-category-block">
          ${books
            .map(({ author, book_image, title, _id }) => {
              if (book_image) {
                return `<li class="home-book-card" data-id="${_id}" data-action="open-modal"> 
                <img src="${book_image}" alt="${title}" class="home-book-image">
                <h2 class="home-book-title">${title}</h2>
                <h3 class="home-book-author">${author}</h3>
              </li>`;
              }

              return `<li class="home-book-card" data-id="${_id}" data-action="open-modal"> 
                <img srcset="
                ${defImg116} 116w,
                ${defImg180} 180w,
                ${defImg218} 218w,
                ${defImg335} 335w
                    "
                sizes="
                (max-width: 375px) 116px,
                (max-width: 768px) 335px,
                (max-width: 1440px) 218px,
                180px
                "  alt="${title}" class="home-book-image">
                <h2 class="home-book-title">${title}</h2>
                <h3 class="home-book-author">${author}</h3>
              </li>`;
            })
            .join('')}
          <button class="see-more" data-category="${list_name}">See more</button>
        </ul>
      </li>`
    )
    .join('');
  loader.style.display = 'none';

  bookList.insertAdjacentHTML('beforeend', markup);
  addToStorage();

  const buttons = document.querySelectorAll('.see-more');

  buttons.forEach(button => {
    button.addEventListener('click', e => {
      // e.preventDefault();
      const categoryButton = e.currentTarget;
      const categorySelected = categoryButton.dataset.category;
      console.log(categorySelected);
      searchCategory(categorySelected).then(data =>
        renderCategories(data, bookList)
      );
    });
  });
  console.log(markup);
  return markup;
}

function renderCategories(array, container) {
  loader.style.display = 'block';
  console.log(array);
  const markup =
    '<div class="test">' +
    array
      .map(({ author, image, title, id }) => {
        if (image) {
          return `<li class="home-card" data-id="${id}"  data-action="open-modal">
            <img src="${image}" alt="${title}" class="home-book-image">
            <h2 class="home-book-title">${title}</h2>
            <h3 class="home-book-author">${author}</h3>
          </li>`;
        }

        return `<li class="home-card" data-id="${id}"  data-action="open-modal">
        <img  srcset="
        ${defImg116} 116w,
        ${defImg180} 180w,
        ${defImg218} 218w,
        ${defImg335} 335w
            "
        sizes="
        (max-width: 375px) 116px,
        (max-width: 768px) 335px,
        (max-width: 1440px) 218px,
        180px
        "
        src="${defImg335}"
        alt="${title}" class="home-book-image">
        <h2 class="home-book-title">${title}</h2>
        <h3 class="home-book-author">${author}</h3>
        </li>`;
      })
      .join('');
  +'</div>';

  container.innerHTML = markup;
  addToStorage();
}
function addToStorage() {
  const books = document.querySelectorAll('[data-action="open-modal"]');

  books.forEach(book => {
    book.addEventListener('click', e => {
      const bookcard = e.currentTarget;
      const id = bookcard.dataset.id;
      const bookData = {
        id,
      };

      modalEl.classList.remove('is-hidden');
      if (e.target.tagName !== 'BUTTON') {
        localStorage.setItem('bookinfo', JSON.stringify(bookData));
        loader.style.display = 'none';
      }
    });
  });

  const modalOpenBtn = document.querySelectorAll('[data-action="open-modal"]');
  const modalCloseBtn = document.querySelector('[data-modal-cls]');
  const modalEl = document.querySelector('[data-modal-El]');
  const imageEl = document.querySelector('.main-img');
  const titleEl = document.querySelector('.modal-title');
  const authorEl = document.querySelector('.modal-author');
  const descriptionEl = document.querySelector('.modal-description');
  const addToListBtn = document.querySelector('.modal-btn');
  const textSubmitEl = document.querySelector('.modal-submit-text');

  modalOpenBtn.forEach(btn =>
    btn.addEventListener('click', () => {
      const savedBookId = localStorage.getItem('bookinfo');
      const parsedBookId = JSON.parse(savedBookId);
      const bookId = parsedBookId.id;
      searchById(bookId).then(data => {
        imageEl.src = data.book_image;
        authorEl.textContent = data.author;
        titleEl.textContent = data.title;
        descriptionEl.textContent = data.description;
      });
      modalEl.classList.remove('is-hidden');
      document.body.classList.add('no-scroll');
    })
  );

  addToListBtn.addEventListener('click', () => {
    const image = imageEl.src;
    const title = titleEl.textContent;
    const author = authorEl.textContent;
    const description = descriptionEl.textContent;

    const addToListData = {
      image,
      title,
      author,
      description,
    };

    localStorage.setItem('addtolistinfo', JSON.stringify(addToListData));
    textSubmitEl.classList.remove('is-hidden');
  });

  modalCloseBtn.addEventListener('click', () => {
    modalEl.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    localStorage.removeItem('bookinfo');
    imageEl.src = '';
    authorEl.textContent = '';
    titleEl.textContent = '';
    descriptionEl.textContent = '';
    textSubmitEl.classList.add('is-hidden');
  });
}
