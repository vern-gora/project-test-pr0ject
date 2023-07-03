const apiUrl = 'https://books-backend.p.goit.global/books/category-list';
const categoriesList = document.querySelector('.categories-list');
const categoriesTitle = document.querySelector('.categories-title');
const bookList = document.querySelector('.book-list');

function searchCategory(selectedCategory) {
  return fetch(
    `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('There is no such category');
      }
      return response.json();
    })
    .then(categories => {
      const selectedCategoryEl = categories.map(el => ({
        image: el.book_image,
        title: el.title,
        author: el.author,
        id: el._id,
        description: el.description,
        links: el.buy_links,
      }));

      console.log(selectedCategoryEl);
      return selectedCategoryEl;
    })
    .catch(error => {
      console.error(error);
      throw new Error('There is no such category');
    });
}

fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Ошибка при выполнении запроса: ' + response.status);
  })
  .then(data => {
    if (Array.isArray(data)) {
      const categories = data.map(item => item.list_name);

      categories.forEach((category, index) => {
        const categoryItem = document.createElement('li');
        categoryItem.textContent = category;
        categoryItem.classList.add('categories-el');
        categoriesList.appendChild(categoryItem);

        categoryItem.addEventListener('click', event => {
          const searchedCategory = event.target.textContent;
          searchCategory(searchedCategory).then(data =>
            renderCategories(data, bookList)
          );
        });
      });
    }
  });

function renderCategories(array, container) {
  console.log(array);
  const markup =
    '<div class="test">' +
    array
      .map(
        ({ author, image, title, id }) =>
          `<li class="card bestseller-list" data-id="${id}" data-action="open-modal">
                <img src="${image}" alt="${title}" class="book-image">
                <h3 class="book-title">${title}</h2>
                <h4 class="book-author">${author}</h3>
              </li>`
      )
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
//     categoriesTitle.addEventListener('click', () => {
//       fetch(apiUrl)
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }
//           throw new Error(
//             'Ошибка при выполнении запроса: ' + response.status
//           );
//         })
//         .then(data => {
//           console.log(data);
//         })
//         .catch(error => {
//           console.log('Произошла ошибка:', error.message);
//         });
//     });
//   } else {
//     console.log('Данные не содержат список категорий.');
//   }
// })
// .catch(error => {
//   console.log('Произошла ошибка:', error.message);
// });
