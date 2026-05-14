document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Hero Slider logic
  const track = document.querySelector('.slider-track');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const nextButton = document.querySelector('.slider-btn.next');
  const prevButton = document.querySelector('.slider-btn.prev');

  if (track && slides.length > 0) {
    let currentSlideIndex = 0;
    const updateSlider = () => {
      track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    };

    const nextSlide = () => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateSlider();
    };

    const prevSlide = () => {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      updateSlider();
    };

    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);

    // Auto-slide every 4 seconds
    setInterval(nextSlide, 4000);
  }
});
