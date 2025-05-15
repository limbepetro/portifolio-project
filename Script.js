// Greeting based on time
window.onload = () => {
  const greeting = document.getElementById('greeting');
  const hour = new Date().getHours();
  if (greeting) {
    if (hour < 12) greeting.textContent = 'Good morning!';
    else if (hour < 18) greeting.textContent = 'Good afternoon!';
    else greeting.textContent = 'Good evening!';
  }
};

// Toggle Dark/Light Mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Form Validation (email & phone)
function validateContactForm() {
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
  const phoneRegex = /^[0-9]{10,15}$/;

  if (!emailRegex.test(email.value)) {
    alert("Please enter a valid email.");
    return false;
  }
  if (!phoneRegex.test(phone.value)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
function validateSurveyForm() {
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (fullname === "") {
    alert("Please enter your full name.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Thank you for your feedback!");
  return true;
}
// Toggle Dark/Light Mode
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Optional: Save theme preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Load saved theme on reload
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
