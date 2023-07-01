window.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://books-backend.p.goit.global/books/category-list';
  const categoriesList = document.querySelector('.categories-list');

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
            event.stopPropagation();
          });
        });
      } else {
        console.log('Данные не содержат список категорий.');
      }
    })
    .catch(error => {
      console.log('Произошла ошибка:', error.message);
    });
});
