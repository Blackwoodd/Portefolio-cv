let currentIndex = 0;
const carouselInner = document.querySelector('.carousel-inner');
const totalSlides = document.querySelectorAll('.carousel-item').length;

function updateCarousel() {
    const offset = -currentIndex * 100; // Décalage en %
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Retour au début si on est à la fin
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Retour à la fin si on est au début
    }
    updateCarousel();
}
