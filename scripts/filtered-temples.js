// Get the current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodifications").textContent =
  document.lastModified;

// Menu toggle functionality
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Temples array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Nairobi Kenya Temple",
    location: "Nairobi, Kenya",
    dedicated: "2025, May, 18",
    area: 78000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-56573-main.jpg",
  },
  {
    templeName: "Chicago Illinois Temple",
    location: "Glenview, Illinois, United States",
    dedicated: "1985, August, 9",
    area: 13100,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-27308-main.jpg",
  },
  {
    templeName: "Copenhagen Denmark Temple",
    location: "Copenhagen, Denmark",
    dedicated: "2004, May, 23",
    area: 7000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-16169-main.jpg",
  },
  {
    templeName: "Fortaleza Brazil Temple",
    location: "Fortaleza, Brazil",
    dedicated: "2019, June, 2",
    area: 59000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg",
  },
];

// Function to display temples
function displayTemples(filteredTemples) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = ""; // Clear previous results

  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    gallery.appendChild(card);
  });
}

// Function to filter temples
function filterTemples(category) {
  let filteredTemples;

  switch (category) {
    case "Old":
      filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]); // Extract year
        return year < 1900;
      });
      break;

    case "New":
      filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
      });
      break;

    case "Large":
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      break;

    case "Small":
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      break;

    default:
      filteredTemples = temples; // Show all temples (Home)
  }

  displayTemples(filteredTemples);
}

// Event listeners for navigation links
document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default behavior of links

    // Remove "active" class from all links and add to the clicked one
    document
      .querySelectorAll(".navigation a")
      .forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");

    // Get the category from the link text and filter temples
    const category = event.target.textContent;
    filterTemples(category);
  });
});

// Load all temples by default
displayTemples(temples);
