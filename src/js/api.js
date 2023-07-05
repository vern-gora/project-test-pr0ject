import axios from 'axios';

const bestSellersUrl = 'https://books-backend.p.goit.global/books/top-books';
// const categoriesUrl = 'https://books-backend.p.goit.global/books/category-list';

async function searchTopBooks() {
  try {
    const { data } = await axios.get(bestSellersUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function searchCategory(selectedCategory) {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
    );
    const categories = response.data;

    const selectedCategoryEl = categories.map(el => {
      const currentBookEl = el;
      return {
        image: currentBookEl.book_image,
        title: currentBookEl.title,
        author: currentBookEl.author,
        id: currentBookEl._id,
        description: currentBookEl.description,
        links: currentBookEl.buy_links,
      };
    });

    return selectedCategoryEl;
  } catch (error) {
    console.log(error);
  }
}

async function searchById(id) {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    const booksId = response.data;

    return booksId;
  } catch (error) {
    console.log(error);
  }
}
export { searchTopBooks, searchCategory, searchById };
