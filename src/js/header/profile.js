import { signIn, signOut, getUserData } from '../firebase/firebase-api';
import { getName } from '../helpers/get-name';

const logoutMileButton = document.getElementById('logout-mobile-button');
const profileButton = document.querySelector('.profile-button');
const profileButtonText = profileButton.querySelector('.profile-button__text');
const profileButtonImg = profileButton.querySelector('.profile-button__img');
const profileButtonIcon = profileButton.querySelector('.profile-button__icon');
const profileButtonMenu = document.querySelector('.profile-dropdown-menu');
const profileButtonLogout = document.querySelector(
  '.profile-dropdown-menu__logout'
);
const profileButtonIconArrowDown = profileButton.querySelector(
  '.profile-button__icon-down'
);
const profileButtonIconArrowRight = profileButton.querySelector(
  '.profile-button__icon-right'
);

let shomMenu = false;

const defaultButtonText = 'Sign up';
const hideClass = 'is-hidden';
const hideAuth = 'auth';

function updateUsername(username) {
  try {
    profileButtonText.innerHTML = username;
  } catch (error) {
    console.error(error);
  }
}

function updateProfileImage(profileImage) {
  try {
    if (!profileImage) {
      profileButtonImg.classList.add(hideClass);

      return;
    }
    profileButtonImg.src = profileImage;
    profileButtonImg.classList.remove(hideClass);
  } catch (error) {
    console.error(error);
  }
}

export async function signOutHandler() {
  try {
    await signOut();
    updateUsername(defaultButtonText);
    updateProfileImage();
    afterSignOut();
  } catch (error) {
    console.error(error);
  }
}

function clickOutsideHandler(event) {
  const target = event.target;

  if (!profileButtonMenu.contains(target) && shomMenu) {
    switchShowDropDownMenu();
    shomMenu = false;
  }
}

function afterSignIn() {
  try {
    profileButton.removeEventListener('click', signInHandler);
    profileButton.classList.add(hideAuth);
    profileButtonText.classList.add(hideAuth);
    profileButtonIcon.classList.add(hideAuth);

    profileButtonIconArrowRight.classList.add(hideClass);
    profileButtonIconArrowDown.classList.remove(hideClass);

    profileButton.addEventListener('click', handleClickOnProfile);
    document.addEventListener('click', clickOutsideHandler);
    logoutMileButton.classList.remove(hideClass);
  } catch (error) {
    console.error(error);
  }
}

function handleClickOnProfile(event) {
  event.stopPropagation();
  switchShowDropDownMenu();
  shomMenu = true;
}

function afterSignOut() {
  try {
    profileButton.addEventListener('click', signInHandler);
    profileButton.classList.remove(hideAuth);
    profileButtonText.classList.remove(hideAuth);
    profileButtonIcon.classList.remove(hideAuth);

    profileButtonIconArrowRight.classList.remove(hideClass);
    profileButtonIconArrowDown.classList.add(hideClass);
    profileButton.removeEventListener('click', handleClickOnProfile);
    document.removeEventListener('click', clickOutsideHandler);
    switchShowDropDownMenu(true);
    logoutMileButton.classList.add(hideClass);
    shomMenu = false;
  } catch (error) {
    console.error(error);
  }
}

function switchShowDropDownMenu(bool = false) {
  if (!bool) {
    profileButtonMenu.classList.toggle(hideClass);
  } else {
    profileButtonMenu.classList.add(hideClass);
  }
}

async function signInHandler() {
  try {
    const user = await getUserData();
    if (user) {
      updateUsername(getName(user.displayName));
      updateProfileImage(user.photoUrl);
      afterSignIn();
    } else {
      await signIn();
      signInHandler();
    }
  } catch (error) {
    console.error(error);
  }
}

async function onInit() {
  const user = await getUserData();

  if (user) {
    updateUsername(getName(user.displayName));
    updateProfileImage(user.photoUrl);
    afterSignIn();
  }

  profileButton.addEventListener('click', signInHandler);
  profileButtonLogout.addEventListener('click', signOutHandler);
}

onInit();
