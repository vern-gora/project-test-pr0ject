export const menuOpenBtn = document.querySelector('button[data-menu-open]');
export const menuCloseBtn = document.querySelector('button[data-menu-close]');
export const mobMenuEl = document.querySelector('.mob-menu');
export const lightLogoEl = document.querySelector('#logo-light');
export const darkLogoEl = document.querySelector('#logo-dark');

export const headerSignUpBtn = document.querySelector(".sign-up-btn");
export const mobMenuSignUpBtn = document.querySelector(".mob-menu-sign-up-btn");
export const mobMenuLogOutBtn = document.querySelector(".mob-menu-log-out-btn");

if (localStorage.getItem('theme') === 'dark') {
  lightLogoEl.classList.add('visually-hidden');
  darkLogoEl.classList.remove('visually-hidden');
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
  localStorage.setItem('theme', newTheme);
};

document.querySelector('.theme-switcher').addEventListener('click', switchTheme);
