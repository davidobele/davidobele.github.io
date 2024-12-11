const seeMoreBtn = document.getElementById('seeMoreBtn');
const testimonials = document.querySelectorAll('.testimonial-hidden');
let currentTestimonialIndex = 0;

seeMoreBtn.addEventListener('click', () => {
    for (let i = 0; i < 4 && currentTestimonialIndex < testimonials.length; i++) {
        testimonials[currentTestimonialIndex].classList.remove('testimonial-hidden');
        currentTestimonialIndex++;
    }

    if (currentTestimonialIndex >= testimonials.length) {
        seeMoreBtn.style.display = 'none';
    }
});
