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

// import { useModal } from './modal.js';

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
    console.log('data', data);

    renderBooks(data);
  })
  .catch(error => {
    console.log(error);
  });

// function renderBooks(array) {
//   loader.style.display = 'block';

//   const markup = array
//     .map(
//       ({ list_name, books }) =>
//         `<li class="home-bestseller-list">
//         <h2 class="home-category-heading">${list_name}</h2>
//         <ul class="home-category-block">
//           ${books
//             .map(({ author, book_image, title, _id }) => {
//               const imageGet = book_image;
//               if (book_image) {
//                 return `<li class="home-book-card" data-id="${_id}" data-action="open-modal">
//                 <img src="${book_image}" alt="${title}" class="home-book-image" >
//                 <h2 class="home-book-title">${title}</h2>
//                 <h3 class="home-book-author">${author}</h3>
//                 </li>`;
//               }

//               return `<li class="home-book-card" data-id="${_id}" data-action="open-modal">
//               <img src="${imageDefault}" alt="${title}" class="home-book-image" >
//               <h2 class="home-book-title">${title}</h2>
//               <h3 class="home-book-author">${author}</h3>
//               </li>`;
//             })
//             .join('')}
//           <button class="see-more" data-category="${list_name}">See more</button>
//         </ul>
//       </li>`
//     )
//     .join('');

//   bookList.insertAdjacentHTML('beforeend', markup);
//   addToStorage();

//   const buttons = document.querySelectorAll('.see-more');

//   buttons.forEach(button => {
//     button.addEventListener('click', e => {
//       // e.preventDefault();
//       const categoryButton = e.currentTarget;
//       const categorySelected = categoryButton.dataset.category;
//       console.log(categorySelected);
//       searchCategory(categorySelected).then(data =>
//         renderCategories(data, bookList)
//       );
//     });
//   });

//   loader.style.display = 'none';
// }

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
              book_image = '';

              if (book_image) {
                console.log(!!book_image);
                return `<li class="home-book-card" data-id="${_id}" data-action="open-modal"> 
                  <img src="${book_image}" alt="${title}" class="home-book-image">
                  <h2 class="home-book-title">${title}</h2>
                  <h3 class="home-book-author">${author}</h3>
                  </li>`;
              }

              console.log('needed');
              return `<li class="home-book-card" data-id="${_id}" data-action="open-modal"> 
                  <img 
                  srcset="
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
            .join('')}
          <button class="see-more" data-category="${list_name}">See more</button>
        </ul>
      </li>`
    )
    .join('');

  bookList.insertAdjacentHTML('beforeend', markup);
  addToStorage();

  const buttons = document.querySelectorAll('.see-more');

  buttons.forEach(button => {
    button.addEventListener('click', e => {
      // e.preventDefault();
      const categoryButton = e.currentTarget;
      const categorySelected = categoryButton.dataset.category;
      console.log(categorySelected);
      searchCategory(categorySelected).then(data => {
        renderCategories(data, bookList);
      });
    });
  });

  loader.style.display = 'none';
}

function renderCategories(array, container) {
  console.log(array);

  const markup =
    '<div class="test">' +
    array
      .map(({ author, image, title, id }) => {
        image = '';
        if (image) {
          return `<li class="home-card" data-id="${id}"  data-action="open-modal">
                <img src="${image}" alt="${title}" class="home-book-image">
                <h2 class="home-book-title">${title}</h2>
                <h3 class="home-book-author">${author}</h3>
              </li>`;
        }

        return `<li class="home-card" data-id="${id}"  data-action="open-modal">
                <img 
                srcset="
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
      .join('') +
    '</div>';

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

      if (e.target.tagName !== 'BUTTON') {
        localStorage.setItem('bookinfo', JSON.stringify(bookData));
      }
    });
  });
}
