window.onload = function() {
  const imagesWrapper = document.querySelector('.slider .images_wrapper');
  const images = document.querySelectorAll('.slider .images_wrapper img');
  const btnPrev = document.querySelector('.button_prev');
  const btnNext = document.querySelector('.button_next');

  let i = 0;
  images[i].classList.add('is-active');

  btnNext.onclick = slideNext;
  btnPrev.onclick = slidePrev;

  function slideNext() {
    images[i].classList.remove('is-active');
    i < images.length - 1 ? i++ : (i = 0);
    images[i].classList.add('is-active');
  }

  function slidePrev() {
    images[i].classList.remove('is-active');
    i === 0 ? (i = images.length - 1) : i--;
    images[i].classList.add('is-active');
  }

  let touchStartX = 0;
  let touchStartY = 0;
  let touchStart = 0;
  let touchEnd = 0;

  const swipeArea = imagesWrapper;

  swipeArea.addEventListener('touchstart', function(e) {
    console.log('start;');
  });

  // setInterval(slideNext, 3000);
};
