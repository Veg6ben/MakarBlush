// Slider functionality - Simplified and robust
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.getElementById('image-slider');
    if (!sliderContainer) {
        console.log('Slider container not found');
        return;
    }

    const slider = sliderContainer.querySelector('.slider');
    const slides = sliderContainer.querySelectorAll('.slide');
    const prevBtn = sliderContainer.querySelector('.prev');
    const nextBtn = sliderContainer.querySelector('.next');
    const dots = sliderContainer.querySelectorAll('.slider-dot');

    console.log('Slider elements found:', {
        container: !!sliderContainer,
        slider: !!slider,
        slides: slides.length,
        prevBtn: !!prevBtn,
        nextBtn: !!nextBtn,
        dots: dots.length
    });

    if (slides.length === 0) {
        console.log('No slides found');
        return;
    }

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        // Move slider
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        console.log('Updated slider to slide:', currentSlide);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    // Add event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            console.log('Prev button clicked');
            prevSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            console.log('Next button clicked');
            nextSlide();
        });
    }

    // Add dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            console.log('Dot clicked:', index);
            goToSlide(index);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Auto-slide functionality
    let autoSlideInterval = setInterval(nextSlide, 3000);

    // Pause on hover
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 3000);
    });

    // Initialize
    updateSlider();
    console.log('Slider initialized successfully');
});
