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

import image1 from '../img/support-png/1@1x.png';
import image1x2 from '../img/support-png/1@2x.png';
import image2 from '../img/support-png/2@1x.png';
import image2x2 from '../img/support-png/2@2x.png';
import image3 from '../img/support-png/3@1x.png';
import image3x2 from '../img/support-png/3@2x.png';
import image4 from '../img/support-png/4@1x.png';
import image4x2 from '../img/support-png/4@2x.png';
import image5 from '../img/support-png/5@1x.png';
import image5x2 from '../img/support-png/5@2x.png';
import image6 from '../img/support-png/6@1x.png';
import image6x2 from '../img/support-png/6@2x.png';
import image7 from '../img/support-png/7@1x.png';
import image7x2 from '../img/support-png/7@2x.png';
import image8 from '../img/support-png/8@1x.png';
import image8x2 from '../img/support-png/8@2x.png';
import image9 from '../img/support-png/9@1x.png';
import image9x2 from '../img/support-png/9@2x.png';

const imageArray = [
  {
    image1,
    image1x2,
  },
  {
    image2,
    image2x2,
  },
  {
    image3,
    image3x2,
  },
  {
    image4,
    image4x2,
  },
  {
    image5,
    image5x2,
  },
  {
    image6,
    image6x2,
  },
  {
    image7,
    image7x2,
  },
  {
    image8,
    image8x2,
  },
  {
    image9,
    image9x2,
  },
];

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const charityContainer = document.querySelector('.swiper-wrapper');

function createTemplate(objectArray, imageArray) {
  return objectArray
    .map((org, index) => {
      const images = imageArray[index];

      const image1x = images[`image${index + 1}`];
      const image2x = images[`image${index + 1}x2`];

      return `<li class="swiper-slide">
        <a
          class="charity-link"
          rel="nofollow noreferrer noopener"
          target="_blank"
          href="${org.url}"
        >
          <img
            src="${image1x}"
            srcset="${image2x} 2x"
            class="charity-img"
            alt="${org.title}"
          />
        </a>
      </li>`;
    })
    .join('');
}

let template = createTemplate(charityArray, imageArray);
charityContainer.insertAdjacentHTML('beforeend', template);

// --------------Swiper ------------

const swiperOptions = {
  direction: 'vertical',

  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
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
