document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById("login-form");
  const emailPhoneInput = document.getElementById("email_phone");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.querySelector(".error-message");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const identifier = emailPhoneInput.value.trim();
    const password = passwordInput.value.trim();

    let isValid = true;

    if (identifier === "") {
      showError(emailPhoneInput, "Email or Phone Number is required");
      isValid = false;
    } else if (!validateEmail(identifier) && !validatePhoneNumber(identifier)) {
      showError(emailPhoneInput, "Invalid Email or Phone Number");
      isValid = false;
    } else {
      clearError(emailPhoneInput);
    }

    if (password === "") {
      showError(passwordInput, "Password is required");
      isValid = false;
    } else {
      clearError(passwordInput);
    }

    if (isValid) {
      alert("You have successfully logged in");
      loginForm.submit();
    }
  });

  function showError(input, message) {
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.textContent = message;
      errorElement.hidden = false;
    } else {
      const error = document.createElement("span");
      error.className = "error-message";
      error.style.color = "red";
      error.textContent = message;
      input.parentNode.insertBefore(error, input.nextSibling);
    }
    input.setAttribute('aria-invalid', 'true');
  }

  function clearError(input) {
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.hidden = true;
    }
    input.setAttribute('aria-invalid', 'false');
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhoneNumber(phoneNumber) {
    const re = /^[0-9]{10,15}$/;
    return re.test(String(phoneNumber));
  }
});