// Get the current year using JavaScript
const year = new Date().getFullYear();

// Set the year inside the element with id="currentyear"
document.getElementById("currentyear").textContent = year;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Set the last modified date inside the element with id="lastmodifications"
document.getElementById("lastmodifications").textContent = lastModifiedDate;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// form validation for contact form //
document
  .getElementById("joinForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("error-message");

    errorMessage.textContent = ""; // Clear previous errors

    if (name === "" || email === "" || password === "") {
      errorMessage.textContent = "All fields are required.";
    } else if (!validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email.";
    } else if (password.length < 6) {
      errorMessage.textContent = "Password must be at least 6 characters long.";
    } else {
      alert("Form submitted successfully!");
      this.submit(); // Proceed with form submission
    }
  });

// Function to validate email format
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
