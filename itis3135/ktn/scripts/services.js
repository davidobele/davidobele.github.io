let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevslide');
const nextBtn = document.getElementById('nextslide');

function showSlide(index) {
    slides.forEach((slide) => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

showSlide(slideIndex);

nextBtn.addEventListener('click', nextslide);
prevBtn.addEventListener('click', prevslide);

let autoAdvanceInterval = setInterval(nextslide, 5000);

[prevBtn, nextBtn].forEach((btn) => {
    btn.addEventListener('click', () => {
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = setInterval(nextslide, 5000);
    });
});