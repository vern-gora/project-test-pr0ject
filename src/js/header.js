//import { signIn, signOut, getUserData } from './firebase/firebase-api';
//import { getName } from './helpers/get-name';

const menuOpenBtn = document.querySelector('button[data-menu-open]');
const menuCloseBtn = document.querySelector('button[data-menu-close]');
const mobMenuEl = document.querySelector('.mob-menu');
const lightLogoEl = document.querySelector('#logo-light');
const darkLogoEl = document.querySelector('#logo-dark');
const lightBagIcon = document.querySelector('#icon-bag');
const darkBagIcon = document.querySelector('#icon-bag-black');
const shoppingListLink = document.querySelector(
  '.header-nav-item-shopping-list'
);
const mobShoppingListLink = document.querySelector(
  '.mob-menu-nav-item-shopping-list'
);
const isActiveIcon = document.querySelector('#is-active-icon');
const mobLightIcon = document.querySelector('#mob-icon-light');
const isActiveMobIcon = document.querySelector('#is-active-mob-icon');

const headerSignUpBtn = document.querySelector('.sign-up-btn');
const mobMenuSignUpBtn = document.querySelector('.mob-menu-sign-up-btn');
const mobMenuLogOutBtn = document.querySelector('.mob-menu-log-out-btn');

//function updateUsername(username) {
//  try {
//    const userNameElements = [...document.getElementsByClassName('username')];
//    userNameElements.forEach(el => (el.innerHTML = username));
//  } catch (error) {
//    console.error(error);
//  }
//}

//function updateProfileImage(profileImage) {
//  try {
//     const profileSvgElements = [
//       ...document.getElementsByClassName('user-photo'),
//     ];

//     const profileImageImgElements = [
//       ...document.getElementsByClassName('user-photo-img'),
//     ];

//     if (profileImage) {
//       profileImageImgElements.forEach(el => {
//         el.src = profileImage;
//         el.style.display = 'block';
//       });
//       profileSvgElements.forEach(el => {
//         el.style.display = 'none';
//       });
//     } else {
//       profileImageImgElements.forEach(el => {
//         el.style.display = 'none';
//       });
//       profileSvgElements.forEach(el => {
//         el.style.display = 'block';
//       });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function signOutHandler() {
//   try {
//     await signOut();
//     updateUsername(`Sign in`);
//     updateProfileImage();
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function signInHandler() {
//   try {
//     await signIn();
//     const user = await getUserData();
//     if (user) {
//       updateUsername(getName(user.displayName));
//       updateProfileImage(user.photoUrl);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function onInit() {
//   const user = await getUserData();
//   if (user) {
//     updateUsername(getName(user.displayName));
//     updateProfileImage(user.photoUrl);
//   }
//   headerSignUpBtn.addEventListener('click', signInHandler);
//   mobMenuSignUpBtn.addEventListener('click', signInHandler);
//   mobMenuLogOutBtn.addEventListener('click', signOutHandler);
// }
// onInit();

if (localStorage.getItem('theme') === 'dark') {
  lightLogoEl.classList.add('visually-hidden');
  darkLogoEl.classList.remove('visually-hidden');
  lightBagIcon.classList.remove('visually-hidden');
  darkBagIcon.classList.add('visually-hidden');
} else {
  lightBagIcon.classList.add('visually-hidden');
  darkBagIcon.classList.remove('visually-hidden');
}
if (shoppingListLink.classList.contains('is-active')) {
  isActiveIcon.classList.remove('visually-hidden');
  lightBagIcon.classList.add('null');
  darkBagIcon.classList.add('null');
}

if (mobShoppingListLink.classList.contains('is-active')) {
  isActiveMobIcon.classList.remove('visually-hidden');
  mobLightIcon.classList.add('visually-hidden');
}
menuOpenBtn.addEventListener('click', () => {
  mobMenuEl.classList.toggle('visually-hidden');
  menuCloseBtn.classList.toggle('visually-hidden');
  menuOpenBtn.classList.toggle('visually-hidden');
  document.body.classList.toggle('no-scroll');
});

menuCloseBtn.addEventListener('click', () => {
  mobMenuEl.classList.toggle('visually-hidden');
  menuCloseBtn.classList.toggle('visually-hidden');
  menuOpenBtn.classList.toggle('visually-hidden');
  document.body.classList.toggle('no-scroll');
});

const switchTheme = () => {
  const rootEl = document.documentElement;
  let dataTheme = rootEl.getAttribute('data-theme'),
    newTheme;
  newTheme = dataTheme === 'light' ? 'dark' : 'light';
  rootEl.setAttribute('data-theme', newTheme);
  lightLogoEl.classList.toggle('visually-hidden');
  darkLogoEl.classList.toggle('visually-hidden');
  lightBagIcon.classList.toggle('visually-hidden');
  darkBagIcon.classList.toggle('visually-hidden');
  localStorage.setItem('theme', newTheme);
};

document
  .querySelector('.theme-switcher')
  .addEventListener('click', switchTheme);


