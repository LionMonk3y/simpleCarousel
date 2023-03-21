let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;

document
  .getElementById("carousel__button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carousel__button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel__item--visible");
    slide.classList.add("carousel__item--hidden");
  }

  slides[slidePosition].classList.add("carousel__item--visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

// AutoPlay

const carouselItems = document.querySelectorAll('.carousel__item');
let currentItemIndex = 0;
const intervalDuration = 5000; // 5 seconds

function goToNextItem() {
  carouselItems[currentItemIndex].classList.remove('carousel__item--visible');
  currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
  carouselItems[currentItemIndex].classList.add('carousel__item--visible');
}

setInterval(goToNextItem, intervalDuration);
