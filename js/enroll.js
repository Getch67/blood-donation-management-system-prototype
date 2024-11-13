document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("EnrollmentForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const fatherName = document.getElementById("fatherName").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value.trim();
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;

    removeAllErrors();

    let isValid = true;

    if (name === "") {
      showError("name", "Name is required");
      isValid = false;
    }

    if (fatherName === "") {
      showError("fatherName", "Father's Name is required");
      isValid = false;
    }

    if (surname === "") {
      showError("surname", "Surname is required");
      isValid = false;
    }

    if (!male && !female) {
      showError("male", "Sex is required");
      isValid = false;
    }

    if (age === "" || age < 17 || age > 65) {
      showError("age", "Age must be between 17 and 65");
      isValid = false;
    }

    if (email !== "" && !validateEmail(email)) {
      showError("email", "Invalid email address");
      isValid = false;
    }

    if (isValid) {
      alert("You have successfully submitted the enrollment form");
      form.submit();
    }
  });

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement("span");
    error.className = "error";
    error.textContent = message;
    field.parentNode.insertBefore(error, field.nextSibling);
  }

  function removeAllErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.remove());
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});