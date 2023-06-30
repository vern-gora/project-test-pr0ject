import axios from 'axios';

const bestSellersUrl = 'https://books-backend.p.goit.global/books/top-books';
const categoriesUrl = 'https://books-backend.p.goit.global/books/category-list';
const testCategory = 'Series Books';
const bookId = '643282b3e85766588626a1a8';

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

    for (let i = 0; i < categories.length; i++) {
      const category = categories[i].list_name;
      console.log(category);
    }

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

    for (let i = 0; i < categories.length; i++) {
      const category = categories[i]._id;
      // const category = categories[i].list_name;
      console.log(category);
    }

    return categories;
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
