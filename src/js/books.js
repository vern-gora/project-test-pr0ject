import { searchTopBooks, searchById, searchCategory } from './api.js';

const bookList = document.querySelector('.book-list');
const loader = document.querySelector('.loader');

searchTopBooks()
  .then(data => {
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
            .map(
              ({ author, book_image, title, _id }) =>
                `<li class="home-book-card" data-id="${_id}" data-action="open-modal"> 
                <img src="${book_image}" alt="${title}" class="home-book-image">
                <h2 class="home-book-title">${title}</h2>
                <h3 class="home-book-author">${author}</h3>
              </li>`
            )
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
      categorySelected = categoryButton.dataset.category;
      console.log('yeye', categorySelected);
      searchCategory(categorySelected).then(data =>
        renderCategories(data, bookList)
      );
    });
  });

  return markup;
}

let categorySelected = '';

function renderCategories(array, container) {
  loader.style.display = 'block';
  console.log(array);
  const markup =
    `<h2 class="category-name-heading" id="category-heading">${categorySelected}</h2><div class="test">` +
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

  const heading = document.getElementById('category-heading');
  const words = heading.textContent.split(' ');
  const lastWord = words.pop();
  const reconstructedHeading =
    words.join(' ') + ' <span class="books-design">' + lastWord + '</span>';
  heading.innerHTML = reconstructedHeading;

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

export { bookList, renderCategories };
