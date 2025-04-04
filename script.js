let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;
const carouselInner = document.querySelector('.carousel-inner');
const themes = document.querySelectorAll('.theme');

function updateCarousel() {
    const offset = -currentIndex * 33.35; // Décalage en pourcentage
    carouselInner.style.transform = `translateX(${offset}%)`;

    // Mettre à jour la classe active sur les thèmes
    themes.forEach((theme, index) => {
        if (index === currentIndex) {
            theme.classList.add('active');
        } else {
            theme.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}
