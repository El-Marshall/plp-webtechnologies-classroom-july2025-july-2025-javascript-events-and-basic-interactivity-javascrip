// ===========================
// FORM VALIDATION
// ===========================
const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate inputs manually (custom validation)
  if (username.length < 3) {
    message.textContent = "❌ Username must be at least 3 characters long.";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "❌ Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // If everything is valid
  message.textContent = "✅ Form submitted successfully!";
  message.style.color = "green";

  // Reset form fields
  form.reset();
});

// ===========================
// INTERACTIVE FEATURE 1: COUNTER
// ===========================
let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function () {
  count++;
  counter.textContent = count;
});

// ===========================
// INTERACTIVE FEATURE 2: TOGGLE SECRET TEXT
// ===========================
const toggleBtn = document.getElementById("toggleBtn");
const secretText = document.getElementById("secretText");

toggleBtn.addEventListener("click", function () {
  if (secretText.style.display === "none") {
    secretText.style.display = "block";
    toggleBtn.textContent = "Hide Secret";
  } else {
    secretText.style.display = "none";
    toggleBtn.textContent = "Show Secret";
  }
});
