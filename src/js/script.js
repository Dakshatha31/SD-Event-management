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

  // Image viewer for service gallery thumbnails
  const galleryImages = document.querySelectorAll('.gallery-thumb');
  if (galleryImages.length) {
    const overlay = document.createElement('div');
    overlay.className = 'image-viewer-overlay';
    overlay.innerHTML = `
      <button type="button" class="image-viewer-close" aria-label="Close image viewer">&times;</button>
      <img src="" alt="Image preview" class="image-viewer-img" />
    `;

    const viewerImage = overlay.querySelector('.image-viewer-img');
    const closeButton = overlay.querySelector('.image-viewer-close');

    const openViewer = (src, alt) => {
      viewerImage.src = src;
      viewerImage.alt = alt || 'Image preview';
      overlay.classList.add('visible');
      document.body.style.overflow = 'hidden';
      closeButton.focus();
    };

    const closeViewer = () => {
      overlay.classList.remove('visible');
      document.body.style.overflow = '';
    };

    galleryImages.forEach(image => {
      image.style.cursor = 'pointer';
      image.addEventListener('click', () => openViewer(image.src, image.alt));
    });

    overlay.addEventListener('click', event => {
      if (event.target === overlay) {
        closeViewer();
      }
    });

    closeButton.addEventListener('click', closeViewer);
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && overlay.classList.contains('visible')) {
        closeViewer();
      }
    });

    document.body.appendChild(overlay);
  }
});
