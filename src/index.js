/**
  |============================
  | include js partials with
  | default import
  |============================
*/
import './js/header.js';
import './js/menu.js';
import './js/categories.js';
import './js/support.js';
import './js/books.js';
import './js/modal.js';
import './js/shopping-list.js';
import './js/book-card.js';
import './js/firebase/firebase-api.js';
import './js/firebase/firebase-config.js';

isUserSignIn();


// async function isUserSignIn() {
//   const userId = localStorage.getItem('userId');
//   if (!userId) {
//     onClickSignOut();
//   } else {
//   }
// }