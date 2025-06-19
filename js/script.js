

// Hide preloader after window loads
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  // ⏳ Add a delay of 3 seconds (3000ms)
  setTimeout(() => {
    preloader.style.display = "none";
  }, 6000);
});


// Theme toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  html.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
});

// AOS Animation Init
AOS.init({
  duration: 1000,
  once: true
});

// Swiper Init (for future use)
if (typeof Swiper !== 'undefined') {
  new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
    }
  });
}


// Contact form confirmation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const confirmation = document.getElementById("confirmation");
  confirmation.style.display = "block";

  setTimeout(() => {
    confirmation.style.display = "none";
    this.reset();
  }, 3000);
});
