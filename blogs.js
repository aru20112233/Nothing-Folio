// Optional JavaScript functionality can go here
console.log("Nothing-themed portfolio loaded.");

// navbar
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("show");
  });
  
//   toggle light/dark


const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const tooltip = document.getElementById("theme-tooltip");

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light-theme");
  toggleBtn.textContent = "🌞";
}

// Toggle handler
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  const isLight = body.classList.contains("light-theme");
  toggleBtn.textContent = isLight ? "🌞" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// blogs
  document.addEventListener('DOMContentLoaded', function () {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const card = this.closest('.blog-card');
        const fullContent = card.querySelector('.full-content');

        if (fullContent.classList.contains('hidden')) {
          fullContent.classList.remove('hidden');
          this.textContent = 'Read less ←';
        } else {
          fullContent.classList.add('hidden');
          this.textContent = 'Read more →';
        }
      });
    });
  });
