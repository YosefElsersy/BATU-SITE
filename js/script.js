// ---------------------- up arrow after scrolling ----------------------
let arrow = document.getElementById("arrow");

window.addEventListener("scroll", (e) => {
    if (scrollY > 500 && arrow.style.opacity !== "1") {
        arrow.style.opacity = "1";
        arrow.style.pointerEvents = "auto"; // Enable pointer events when visible
    } else if (scrollY <= 400 && arrow.style.opacity !== "0") {
        arrow.style.opacity = "0";
        arrow.style.pointerEvents = "none"; // Disable pointer events when hidden
    }
});
arrow.addEventListener("click", (e) => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
// ---------------------- AutoPlaying-Sectionp-Adjustments ----------------------
// Initialize the carousel
var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleAutoplaying'), {
    interval: 5000, // Set the interval for auto-advancing slides (in milliseconds)
    // Other options as needed
});
// Initialize ScrollReveal
ScrollReveal().reveal('.container', { delay: 500, origin: 'bottom', distance: '20px', duration: 800 });
ScrollReveal().reveal('#president-photo', { delay: 350, origin: 'left', distance: '20px', duration: 800 });
ScrollReveal().reveal('.col-md-8 h3, .col-md-8 h5, .col-md-8 p', { delay: 500, origin: 'right', distance: '20px', duration: 800 });
ScrollReveal().reveal('.statistic-item', { delay: 500, origin: 'bottom', distance: '20px', duration: 800 });
// Initialize ScrollReveal

// ---------------------- Statistics-Section-Adjustments ----------------------
 // Function to update the statistic number with a smooth animation
 function updateStatisticNumber(statNumber, finalNumber, duration) {
    const frameDuration = 1000 / 60; // 60 FPS
    const totalFrames = Math.ceil(duration / frameDuration);
    const increment = (finalNumber / totalFrames);
    let frame = 0;
    let currentNumber = 0;

    const update = () => {
      currentNumber += increment;
      statNumber.textContent = Math.round(currentNumber);
      frame++;

      if (frame < totalFrames) {
        requestAnimationFrame(update);
      } else {
        statNumber.textContent = finalNumber;
      }
    };

    update();
  }

  // Get all statistic items
  const statisticItems = document.querySelectorAll('.statistic-item');

  statisticItems.forEach((item) => {
    const statNumber = item.querySelector('.statistic-number');
    const finalNumber = parseInt(statNumber.textContent, 10); // Get the actual number from the HTML

    // Set the initial text content to 0
    statNumber.textContent = '0';

    // Animate the statistic number from 0 to the actual number with a slower pace (e.g., 3000 milliseconds)
    updateStatisticNumber(statNumber, finalNumber, 10000);
  });