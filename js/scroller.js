document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".content-container");
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  // Function to go to the previous slide
  function goToPreviousSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
      slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  }

  // Function to go to the next slide
  function goToNextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
      slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  }

  // Attach event listeners to all previous buttons using the class "prevSlide"
  const prevButtons = document.querySelectorAll("#prevSlide");  
  prevButtons.forEach(button => {
      button.addEventListener("click", goToPreviousSlide);
  });

  // Attach event listeners to all next buttons using the class "nextSlide"
  const nextButtons = document.querySelectorAll("#nextSlide");
  nextButtons.forEach(button => {
      button.addEventListener("click", goToNextSlide);
  });
});