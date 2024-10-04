document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length; // Get the total number of slides
    let currentIndex = 0;

    function showSlide(index) {
        const offset = index * -300; // Move by the fixed width of the image (300px)
        slider.style.transform = `translateX(${offset}px)`; // Use pixels instead of percentage
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Change to the total number of images
        showSlide(currentIndex);
    }

    // Change slide every 3 seconds (adjust as needed)
    setInterval(nextSlide, 3000);
});