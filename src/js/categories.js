import { searchCategory } from './api.js';
import { renderCategories} from './books.js';

const apiUrl = 'https://books-backend.p.goit.global/books/category-list';
const categoriesList = document.querySelector('.categories-list');
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

function setActiveCategory(selectedCategoryItem) {
  const activeCategoryItem = document.querySelector('.categories-el.active');
  if (activeCategoryItem) {
    activeCategoryItem.classList.remove('active');
  }
  selectedCategoryItem.classList.add('active');
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

      const allCategoriesItem = document.querySelector('.categories-el');
      allCategoriesItem.addEventListener('click', () => {
        setActiveCategory(allCategoriesItem);
        renderAllCategories(bookList);
      });

      categories.forEach((category, index) => {
        const categoryItem = document.createElement('li');
        categoryItem.textContent = category;
        categoryItem.classList.add('categories-el');
        categoriesList.appendChild(categoryItem);

        categoryItem.addEventListener('click', event => {
          const clickedCategoryItem = event.target;
          setActiveCategory(clickedCategoryItem);
          const searchedCategory = clickedCategoryItem.textContent;
          searchCategory(searchedCategory).then(data =>
            renderCategories(data, bookList)
          );
        });
      });
    }
  });