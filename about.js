document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let currentIndex = 0;

    function showSlide(index) {
        const offset = index * -100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 5; // Change 3 to the total number of images
        showSlide(currentIndex);
    }

    // Change slide every 3 seconds (adjust as needed)
    setInterval(nextSlide, 3000);
});
