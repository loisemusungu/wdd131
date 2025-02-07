// Get the current year using JavaScript
const year = new Date().getFullYear();

// Set the year inside the element with id="currentyear"
document.getElementById("currentyear").textContent = year;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Set the last modified date inside the element with id="lastmodifications"
document.getElementById("lastmodifications").textContent = lastModifiedDate;

// Product Array
const products = [
  { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

// Function to populate Product Name dropdown
function populateProductDropdown() {
    const selectElement = document.getElementById("product-name");

    // Ensure placeholder is first and disabled
    selectElement.innerHTML = `<option value="" disabled selected>Select a Product ...</option>`;

    // Add products dynamically
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;  // Set value as product ID
        option.textContent = product.name;  // Set display text as product name
        selectElement.appendChild(option);
    });
}

// Run the function to populate dropdown on page load
document.addEventListener("DOMContentLoaded", populateProductDropdown);

// Function to update and display review count
function updateReviewCount() {
    let count = localStorage.getItem("reviewCount");

    if (count === null) {
        count = 0;
    }

    count = parseInt(count) + 1;
    localStorage.setItem("reviewCount", count);

    // Display the count (ensure you have an element with id="review-count" in `review.html`)
    document.getElementById("review-count").textContent = count;
}

// Run only when `review.html` loads
document.addEventListener("DOMContentLoaded", updateReviewCount);
