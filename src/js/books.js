import axios from 'axios';

const bestSellersUrl = 'https://books-backend.p.goit.global/books/top-books';
const categoriesUrl = 'https://books-backend.p.goit.global/books/category-list';
const testCategory = 'Series Books';
const bookId = '643282b1e85766588626a083';

async function searchTopBooks(bookUrl) {
  try {
    const response = await axios.get(`${bookUrl}`);
    const books = response.data;

    const bookData = books.map(book => {
      const currentBook = book.books[0];
      return {
        image: currentBook.book_image,
        title: currentBook.title,
        author: currentBook.author,
        id: currentBook._id,
      };
    });
    console.log(bookData);

    return bookData;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to find books');
  }
}
searchTopBooks(bestSellersUrl);

async function searchAllCategory() {
  try {
    const response = await axios.get(`${categoriesUrl}`);
    const categories = response.data;

    const categoryData = categories.map(elem => {
      const currentCategory = elem;
      return {
        name: currentCategory.list_name,
      };
    });
    console.log(categoryData);

    return categories;
  } catch (error) {
    console.log(error);
    throw new Error('There is no such category');
  }
}
searchAllCategory();

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
    console.log(selectedCategoryEl);

    return selectedCategoryEl;
  } catch (error) {
    console.log(error);
    throw new Error('There is no such category');
  }
}
searchCategory(testCategory);

async function searchById(id) {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    const booksId = response.data;

    console.log(booksId);
    return booksId;
  } catch (error) {
    console.log(error);
    throw new Error('There is no such id');
  }
}
searchById(bookId);
