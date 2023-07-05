import { signIn, signOut, getUserData } from '../firebase/firebase-api';
import { getName } from '../helpers/get-name';

function updateUsername(username) {
  try {
    const userNameElements = [...document.getElementsByClassName('username')];
    userNameElements.forEach(el => (el.innerHTML = username));
  } catch (error) {
    console.error(error);
  }
}

function updateProfileImage(profileImage) {
  try {
    const profileSvgElements = [
      ...document.getElementsByClassName('user-photo'),
    ];

    const profileImageImgElements = [
      ...document.getElementsByClassName('user-photo-img'),
    ];

    if (profileImage) {
      profileImageImgElements.forEach(el => {
        el.src = profileImage;
        el.style.display = 'block';
      });
      profileSvgElements.forEach(el => {
        el.style.display = 'none';
      });
    } else {
      profileImageImgElements.forEach(el => {
        el.style.display = 'none';
      });
      profileSvgElements.forEach(el => {
        el.style.display = 'block';
      });
    }
  } catch (error) {
    console.error(error);
  }
}

async function signOutHandler() {
  try {
    await signOut();
    updateUsername(`Sign in`);
    updateProfileImage();
  } catch (error) {
    console.error(error);
  }
}

async function signInHandler() {
  try {
    await signIn();
    const user = await getUserData();
    if (user) {
      updateUsername(getName(user.displayName));
      updateProfileImage(user.photoUrl);
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
  }
  headerSignUpBtn.addEventListener('click', signInHandler);
  mobMenuSignUpBtn.addEventListener('click', signInHandler);
  mobMenuLogOutBtn.addEventListener('click', signOutHandler);
}
onInit();
