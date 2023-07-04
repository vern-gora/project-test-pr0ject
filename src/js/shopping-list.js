import { searchById } from './api';
let shoppingStorage = [];
function addToShoppingListEl() {
  let value = localStorage.getItem('bookinfo');
  console.log(value);
  let parsedValue = JSON.parse(value).id;

  searchById(parsedValue)
    .then(listData => {
      const {
        _id,
        author,
        book_image,
        title,
        list_name,
        description,
        buy_links,
      } = listData;

      const shoppingObject = {
        _id,
        author,
        book_image,
        title,
        list_name,
        description,
        buy_links,
      };

      shoppingStorage.push(shoppingObject);
      const shoppingStorageJSON = JSON.stringify(shoppingStorage);

      localStorage.setItem('shoppingData', shoppingStorageJSON);
      renderShoppingList(shoppingStorage);

      console.log(shoppingStorage);
    })
    .catch(error => {
      console.log(error);
    });
}

function renderShoppingList(shoppingStorage) {
  const cardContainer = document.querySelector('.book-card-container');
  const cardEl = shoppingStorage
    .map(
      ({ author, book_image, title, _id, list_name, description, buy_links }) =>
        `<li class="" data-id="${_id}">
                <img src="${book_image}" alt="${title}" class="book-image">
                <h2 class="">${title}</h2>
                <h3 class="">${author}</h3>
                <h3 class="">${list_name}</h3>
                <p>${description}</p>
                <a>${buy_links}</a>
              </li>`
    )
    .join('');
  cardContainer.insertAdjacentHTML('beforeend', cardEl);
}

export { renderShoppingList, addToShoppingListEl };
