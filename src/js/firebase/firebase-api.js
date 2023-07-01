//firebase-api//

import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from 'firebase/auth';
import { firebaseConfig } from './firebase-config';
import { loginBtn } from '../header';

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

loginBtn.addEventListener('click', e => {
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.customData.email;

      const credential = GoogleAuthProvider.credentialFromError(error);
    });

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
});
