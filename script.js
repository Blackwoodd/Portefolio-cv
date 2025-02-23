let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;
const carouselInner = document.querySelector('.carousel-inner');

function updateCarousel() {
    const offset = -currentIndex * 50; // Décalage en %
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Retour au début
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Retour à la fin
    }
    updateCarousel();
}

