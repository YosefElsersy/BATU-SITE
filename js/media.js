
const pages = document.querySelectorAll(".page");
let currentPage = 0;

function showPage(page) {
  pages.forEach((p, index) => {
    if (index === page - 1) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}

function changePage(page) {
  currentPage = page - 1;
  showPage(page);

  // Scroll to the top of the page with smooth behavior
  window.scrollTo({ top: 400, behavior: 'smooth' });
}

function previousPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage + 1);
    changePage(currentPage + 1);
  }
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage + 1);
    changePage(currentPage + 1);
  }
}

showPage(1);
// ===================================================================
document.addEventListener("DOMContentLoaded", function () {
  const galleryLinks = document.querySelectorAll(".gallery-link");
  const photos = document.querySelectorAll(".photo");
  const popup = document.querySelector(".popup");

  // Function to show the pop-up
  function showPopup(imgSrc, imgAlt, description) {
    popup.querySelector("img").src = imgSrc;
    popup.querySelector("img").alt = imgAlt;
    popup.querySelector("p").textContent = description;
    popup.removeAttribute("hidden");
  }

  // Function to hide the pop-up
  function hidePopup() {
    popup.setAttribute("hidden", true);
  }

  galleryLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const category = this.getAttribute("data-category");

      // Hide all photos
      photos.forEach(photo => photo.style.display = "none");

      if (category === "all") {
        // Show all photos
        photos.forEach(photo => photo.style.display = "block");
      } else {
        // Show photos in the selected category
        photos.forEach(photo => {
          if (photo.getAttribute("data-category") === category) {
            photo.style.display = "block";
          }
        });
      }

      // Hide the pop-up when a category link is clicked
      hidePopup();
    });
  });

  photos.forEach(photo => {
    photo.addEventListener("click", function () {
      const imgSrc = this.querySelector("img").src;
      const imgAlt = this.querySelector("img").alt;
      const description = this.querySelector("p").textContent;

      // Show the pop-up when a photo is clicked
      showPopup(imgSrc, imgAlt, description);
    });
  });

  // Close the pop-up when clicking outside of the image
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      // Hide the pop-up
      hidePopup();
    }
  });
});
