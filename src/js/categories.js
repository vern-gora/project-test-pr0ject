const currentPageURL = window.location.href;
if (currentPageURL === 'http://localhost:1234/index.html') {
  const apiUrl = 'https://books-backend.p.goit.global/books/category-list';
  const categoriesList = document.querySelector('.categories-list');
  const categoriesTitle = document.querySelector('.categories-title');

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

        categoriesTitle.addEventListener('click', () => {
          fetch(apiUrl)
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              throw new Error(
                'Ошибка при выполнении запроса: ' + response.status
              );
            })
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.log('Произошла ошибка:', error.message);
            });
        });
      } else {
        console.log('Данные не содержат список категорий.');
      }
    })
    .catch(error => {
      console.log('Произошла ошибка:', error.message);
    });
}
