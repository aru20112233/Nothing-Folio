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

// projects
// Add this to your projects.js file

document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    // Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    
    // Apply fade-in class and observe each project card
    projectCards.forEach(card => {
      card.classList.add('fade-in');
      observer.observe(card);
    });
    
    // Optional: Add glitch effect on random intervals
    setInterval(() => {
      const randomCard = projectCards[Math.floor(Math.random() * projectCards.length)];
      
      // Create temporary glitch effect
      randomCard.classList.add('glitch-effect');
      setTimeout(() => {
        randomCard.classList.remove('glitch-effect');
      }, 300);
    }, 5000);
    
    // Add click event for mobile (since hover doesn't work well)
    projectCards.forEach(card => {
      card.addEventListener('click', function() {
        const content = this.querySelector('.project-content');
        
        // Toggle the flip
        if (window.innerWidth <= 768) {
          if (content.style.transform === 'rotateY(180deg)') {
            content.style.transform = 'rotateY(0deg)';
          } else {
            content.style.transform = 'rotateY(180deg)';
          }
        }
      });
    });
  });
  
  // Optional: AOS (Animate On Scroll) library integration
  // If you want to use this, add this script to your HTML head:
  // <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  // <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  
  // Initialize AOS if included
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true
    });
  }