// Get the current year using JavaScript
const year = new Date().getFullYear();

// Set the year inside the element with id="currentyear"
document.getElementById("currentyear").textContent = year;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Set the last modified date inside the element with id="lastmodifications"
document.getElementById("lastmodifications").textContent = lastModifiedDate;
