document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup_form");

  const fullName = document.getElementById("full_name");
  const phoneNumber = document.getElementById("phone_number");
  const email = document.getElementById("email");
  const city = document.getElementById("city");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
  const male = document.getElementById("male");
  const female = document.getElementById("female");

  fullName.addEventListener("input", () => validateFullName());
  phoneNumber.addEventListener("input", () => validatePhoneNumber());
  email.addEventListener("input", () => validateEmail());
  city.addEventListener("input", () => validateCity());
  password.addEventListener("input", () => validatePassword());
  confirmPassword.addEventListener("input", () => validateConfirmPassword());
  male.addEventListener("change", () => validateSex());
  female.addEventListener("change", () => validateSex());

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
      validateFullName() &&
      validatePhoneNumber() &&
      validateEmail() &&
      validateCity() &&
      validatePassword() &&
      validateConfirmPassword() &&
      validateSex()
    ) {
      alert("You have successfully signed up");
      form.submit();
    } else {
      alert("Please correct the errors in the form");
    }
  });

  function showError(input, message) {
    const parent = input.parentElement;
    let error = parent.querySelector(".error-message");
    if (!error) {
      error = document.createElement("span");
      error.className = "error-message";
      error.style.color = "red";
      parent.appendChild(error);
    }
    error.textContent = message;
    error.hidden = false;
    input.setAttribute('aria-invalid', 'true');
  }

  function clearError(input) {
    const parent = input.parentElement;
    const error = parent.querySelector(".error-message");
    if (error) {
      error.hidden = true;
    }
    input.setAttribute('aria-invalid', 'false');
  }

  function validateFullName() {
    if (fullName.value.trim() === "") {
      showError(fullName, "Full Name is required");
      return false;
    } else {
      clearError(fullName);
      return true;
    }
  }

  function validatePhoneNumber() {
    const phonePattern = /^[0-9]{10,15}$/;
    if (phoneNumber.value.trim() === "") {
      showError(phoneNumber, "Phone Number is required");
      return false;
    } else if (!phonePattern.test(phoneNumber.value)) {
      showError(phoneNumber, "Invalid Phone Number");
      return false;
    } else {
      clearError(phoneNumber);
      return true;
    }
  }

  function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      showError(email, "Email is required");
      return false;
    } else if (!emailPattern.test(email.value)) {
      showError(email, "Invalid Email");
      return false;
    } else {
      clearError(email);
      return true;
    }
  }

  function validateCity() {
    if (city.value.trim() === "") {
      showError(city, "City is required");
      return false;
    } else {
      clearError(city);
      return true;
    }
  }

  function validatePassword() {
    if (password.value.length < 6) {
      showError(password, "Password must be at least 6 characters");
      return false;
    } else {
      clearError(password);
      return true;
    }
  }

  function validateConfirmPassword() {
    if (confirmPassword.value !== password.value) {
      showError(confirmPassword, "Passwords do not match");
      return false;
    } else {
      clearError(confirmPassword);
      return true;
    }
  }

  function validateSex() {
    if (!male.checked && !female.checked) {
      showError(male, "Sex is required");
      return false;
    } else {
      clearError(male);
      return true;
    }
  }
});