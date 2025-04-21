// Form and Input Elements
const form = document.getElementById('userForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Error elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Event Listener for Form Submit
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  validateForm(); // Validate form on submit
});

// Validate on input change
form.querySelectorAll('input').forEach(input => {
  input.addEventListener('change', validateForm);
});

// Main Validation Function
function validateForm() {
  let valid = true;

  // Name Validation
  if (fullName.value.trim().length < 5) {
    nameError.innerText = "Name must be at least 5 characters.";
    valid = false;
  } else {
    nameError.innerText = "";
  }

  // Email Validation
  if (!email.value.includes("@")) {
    emailError.innerText = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.innerText = "";
  }

  // Phone Validation
  const phoneVal = phone.value.trim();
  if (phoneVal === "123456789" || !/^\d{10}$/.test(phoneVal)) {
    phoneError.innerText = "Enter a valid 10-digit phone number.";
    valid = false;
  } else {
    phoneError.innerText = "";
  }

  // Password Validation
  const userName = fullName.value.trim().toLowerCase();
  const passwordVal = password.value.trim();
  if (
    passwordVal.toLowerCase() === "password" ||
    passwordVal.toLowerCase() === userName ||
    passwordVal.length < 8
  ) {
    passwordError.innerText = "Password is not strong.";
    valid = false;
  } else {
    passwordError.innerText = "";
  }

  // Confirm Password Validation
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.innerText = "Passwords do not match.";
    valid = false;
  } else {
    confirmPasswordError.innerText = "";
  }

  // If all valid, show success
  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
}
