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

// feedback form
const feedbackForm = document.getElementById('feedback-form');
const feedbackSuccess = document.getElementById('feedback-success-msg');

feedbackForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(feedbackForm);

  fetch(feedbackForm.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
  .then(response => {
    if (response.ok) {
      feedbackSuccess.style.display = "block";
      feedbackForm.reset();

      setTimeout(() => {
        feedbackSuccess.style.display = "none";
      }, 4000);
    } else {
      alert("Error submitting form. Please try again.");
    }
  })
  .catch(error => {
    alert("Something went wrong. Please try again.");
  });
});

// qualification

const summaries = [
  `
    <i class="fas fa-arrow-right"></i> Knowledge of DSA, OS, Algorithms and OOPS. <br>
    <i class="fas fa-arrow-right"></i> Current aggregate CGPA of 8.02. <br>
    <i class="fas fa-arrow-right"></i> Mentor in the AnC Council and Chemineers Society. <br>
    <i class="fas fa-arrow-right"></i> Secretary, Public Relations at Antaragni'23. <br>
    <i class="fas fa-arrow-right"></i> Third in the Evonik Sustainability Challenge 2025 <br>
  `,
  `
    <i class="fas fa-arrow-right"></i> Subjects: Physics, Chemistry, Maths, English and P.Ed.<br>
    <i class="fas fa-arrow-right"></i> Scored 96.75% (school rank - 2) <br>
    <i class="fas fa-arrow-right"></i> JEE Mains 2022 by NTA - rank 8482 (school topper)<br>
    <i class="fas fa-arrow-right"></i> JEE Advanced 2022 by IITB - rank 3021 (school topper)<br>
  `,
  `
    <i class="fas fa-arrow-right"></i> Subjects: PCMB, Social Studies, English, P.Ed. and Hindi <br>
    <i class="fas fa-arrow-right"></i> Achieved 95.6% (school rank 5) <br>
    <i class="fas fa-arrow-right"></i> State rank 3 (U.P.) in inline speed skating <br>
    <i class="fas fa-arrow-right"></i> Active quizzer, anchor and event organiser <br>
  `
];

function openModal(index) {
  document.getElementById("modal-body").innerHTML = summaries[index];
  document.getElementById("summaryModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("summaryModal").style.display = "none";
}

// Optional: Close on click outside modal-content
window.onclick = function(e) {
  const modal = document.getElementById("summaryModal");
  if (e.target === modal) closeModal();
}