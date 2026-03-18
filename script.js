let currentIndex = 0;
const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-item');
const themes = document.querySelectorAll('.theme');
const totalSlides = slides.length;

function updateCarousel() {
  if (!carouselInner || totalSlides === 0) {
    return;
  }

  carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;

  themes.forEach((theme, index) => {
    theme.classList.toggle('active', index === currentIndex);
  });
}

function nextSlide() {
  if (totalSlides === 0) {
    return;
  }

  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  if (totalSlides === 0) {
    return;
  }

  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  if (totalSlides === 0) {
    return;
  }

  currentIndex = index;
  updateCarousel();
}

if (totalSlides > 0) {
  updateCarousel();

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      nextSlide();
    }

    if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  });
}
