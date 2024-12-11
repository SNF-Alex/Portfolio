document.addEventListener("DOMContentLoaded", () => {
    const slidesContainer = document.querySelector(".content-container");
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
  
    function goToNextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
      slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
  
    // Attach event listeners to all next buttons
    const buttons = document.querySelectorAll("#nextSlide");
    buttons.forEach(button => {
      button.addEventListener("click", goToNextSlide);
    });
  });