// Get the current year using JavaScript
const year = new Date().getFullYear();

// Set the year inside the element with id="currentyear"
document.getElementById("currentyear").textContent = year;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Set the last modified date inside the element with id="lastmodifications"
document.getElementById("lastmodifications").textContent = lastModifiedDate;

// Windchill calculation //
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("windchillForm");
  const result = document.getElementById("windchillResult");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get input values
    const temperature = parseFloat(
      document.getElementById("temperature").value
    );
    const windSpeed = parseFloat(document.getElementById("windSpeed").value);

    // Validate inputs
    if (isNaN(temperature) || isNaN(windSpeed) || windSpeed <= 0) {
      result.textContent = "Please enter valid inputs.";
      return;
    }

    // Check if conditions for viable wind chill calculation are met
    if (temperature <= 10 && windSpeed > 4.8) {
      const windChill = calculateWindChill(temperature, windSpeed);
      result.textContent = `Wind Chill: ${windChill.toFixed(2)}°C`;
    } else {
      result.textContent =
        "Wind chill cannot be calculated under these conditions.";
    }
  });

  function calculateWindChill(temp, speed) {
    // Wind chill formula
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16)
    );
  }
});