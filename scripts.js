document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    let autoSlideInterval; 

    function hideAllSlides() {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
    }

    function showSlide(slideIndex) {
        hideAllSlides();
        slides[slideIndex].style.display = 'block';
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    
    document.getElementById('prevSlide').addEventListener('click', prevSlide);
    document.getElementById('nextSlide').addEventListener('click', nextSlide);

    
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 1000);
    }

    startAutoSlide(); 

    
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        slide.addEventListener('mouseleave', () => {
            startAutoSlide(); 
        });
    });
});
