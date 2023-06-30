// // / ----------- Version with rendering html in js ------------

// // import charityArray from './charity-array';
// // import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles

// // const charityContainer = document.querySelector('.charity-list');

// // function createTemplate(array) {
// //   return array
// //     .map(org => {
// //       return `
// //   <li class="charity-item">
// //   <a href="${org.url}" rel="nofollow noreferrer noopener" target="_blank">
// //     <img src="${org.img}" alt="${org.title}" />
// //   </a>
// //   </li>
// //   `;
// //     })
// //     .join('');
// // }

// // let template = createTemplate(charityArray);
// // charityContainer.insertAdjacentHTML('beforeend', template);

// //   ---------- Version with replacing atrributes ----------

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const charityArray = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];

const charityLinks = Array.from(document.querySelectorAll('.charity-link'));

let i = 0;

charityLinks.map(org => {
  org.href = charityArray[i].url;
  org.querySelector('img').alt = charityArray[i].title;
  i += 1;
});

// --------------Swiper ------------

const swiperOptions = {
  direction: 'vertical',

  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  observer: true,
  observeParents: true,
  slidesPerColumnFill: 'row',

  breakpoints: {
    320: {
      slidesPerView: 4,
    },

    780: {
      slidesPerView: 6,
    },

    1440: {
      slidesPerView: 6,
    },
  },
};

const swiper = new Swiper('.swiper', swiperOptions);

const upBtn = document.querySelector('.swiper-button-up');

upBtn.addEventListener('click', () => {
  swiper.slideTo(0, 800);
  upBtn.classList.add('is-hidden');
});

swiper.on('slideChange', () => {
  const activeSlideIndex = swiper.activeIndex;
  const totalSlides = swiper.slides.length;

  let slideNumberToGoUp = totalSlides - getNumberOfClicksForSwiper();

  if (activeSlideIndex === slideNumberToGoUp) {
    upBtn.classList.remove('is-hidden');
  }
});

function getNumberOfClicksForSwiper() {
  const windowWidth = window.innerWidth;
  let currentSlidesPerView;

  if (windowWidth >= 1440) {
    currentSlidesPerView = swiperOptions.breakpoints[1440].slidesPerView;
  } else if (windowWidth >= 780) {
    currentSlidesPerView = swiperOptions.breakpoints[780].slidesPerView;
  } else {
    currentSlidesPerView = swiperOptions.breakpoints[320].slidesPerView;
  }

  return currentSlidesPerView;
}
