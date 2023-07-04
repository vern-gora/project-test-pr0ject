const goTopBtn = document.querySelector('.go-top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', goTop);

function trackScroll() {
  const scrollY = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrollY > coords) {
    goTopBtn.classList.add('go-top-show');
  } else {
    goTopBtn.classList.remove('go-top-show');
  }
}

function goTop() {
  var categoryElement = document.getElementById('home-bestsellers-heading');
  var offsetTop = categoryElement.offsetTop;

  if (window.pageYOffset > offsetTop) {
    window.scrollBy(0, -25);
    setTimeout(goTop, 0);
  }
}

