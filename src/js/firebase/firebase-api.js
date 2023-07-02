//firebase-api//

import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { firebaseConfig } from './firebase-config';
import { mobMenuEl } from '../header';
import { getDatabase, ref, set } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
// const logOut = document.querySelector('.mob-menu-log-out-btn');

mobMenuEl.addEventListener('click', e => {
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem('userId', auth.currentUser.uid);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
});

// logOut.addEventListener('click', onClickSignOut);
// function onClickSignOut() {
//   signOut(auth)
//     .then(() => {
//       localStorage.removeItem('userId');
//     })
//     .catch(error => {
//       // An error happened.
//     });
// }

// function writeUserData(userId, qname, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: qname,
//     email: email,
//     profile_picture: imageUrl,
//   });
// }

// writeUserData('qwe', 'ASDASD@ddd.aa', 'dasd', 'dasd');

// REDIRECT
// signInWithRedirect(auth, provider);
//   getRedirectResult(auth)
//     .then(result => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.customData.email;
//       const credential = GoogleAuthProvider.credentialFromError(error);
//     });
export {
  authWithPopup,
  onClickSignOut,
  pushData,
  getFromFirebase,
  removeFromFirebase,
};
