document.addEventListener('DOMContentLoaded', function() {
   let currentSlide = 0;
   const slides = document.querySelectorAll('.slide');
   const slideCount = slides.length;
 
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
 
   // Initial slide display
   showSlide(currentSlide);
 
   // Event listeners for navigation buttons
   document.getElementById('prevSlide').addEventListener('click', prevSlide);
   document.getElementById('nextSlide').addEventListener('click', nextSlide);
 
   const phrases = ["Artrc", "Royal crown", "Nawzat"]; // Phrases to display
   let index = 0; // Index to track phrases
 
   // Start the animation
 
 });
 