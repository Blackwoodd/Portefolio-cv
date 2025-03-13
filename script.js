let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;
const carouselInner = document.querySelector('.carousel-inner');
const themes = document.querySelectorAll('.theme');

// Mettre à jour carrousel + thème actif
function updateCarousel() {
    const offset = -currentIndex * 50; // Déplacement en %
    carouselInner.style.transform = `translateX(${offset}%)`;

    // Mise à jour du thème actif
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

// Initialisation au chargement
updateCarousel();
