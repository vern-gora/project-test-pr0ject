import { searchById } from './api';
// let shoppingStorage = [];
function addToShoppingListEl(e) {
  const id = e.target.dataset.id;
  const textSubmitEl = document.querySelector('.modal-submit-text');
  textSubmitEl.classList.remove('is-hidden');
  // let value = localStorage.getItem('bookinfo');
  // console.log(value);
  // let parsedValue = JSON.parse(value).id;
  const dataFromLS = JSON.parse(localStorage.getItem('shoppingData')) || [];
  if (dataFromLS.find(book => id === book._id)) {
    const newData = dataFromLS.filter(book => book._id !== id);
    localStorage.setItem('shoppingData', JSON.stringify(newData));
    e.target.textContent = 'ADD TO SHOPPING LIST';
    return;
  } else {
    e.target.textContent = 'REMOVE FROM SHOPPING LIST';
  }

  searchById(id)
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
      const newData = JSON.stringify([...dataFromLS, shoppingObject]);

      localStorage.setItem('shoppingData', newData);
    })
    .catch(error => {
      console.log(error);
    });

  // shoppingStorage.push(shoppingObject);

  // renderShoppingList(shoppingStorage);
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
