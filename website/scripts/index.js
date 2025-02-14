// Get and set the current year and last modified date
const yearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastmodifications");

if (yearElement) yearElement.textContent = new Date().getFullYear();
if (lastModifiedElement)
  lastModifiedElement.textContent = document.lastModified;

// Responsive navigation menu toggle
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (hamButton && navigation) {
  hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
  });
}

// Form validation
const joinForm = document.getElementById("joinForm");

if (joinForm) {
  joinForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (!errorMessage) return;
    errorMessage.textContent = "";

    if (!name || !email || !password) {
      errorMessage.textContent = "All fields are required.";
    } else if (!validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email.";
    } else if (password.length < 6) {
      errorMessage.textContent = "Password must be at least 6 characters long.";
    } else {
      alert("Form submitted successfully!");
      joinForm.submit();
    }
  });
}

// Function to validate email format
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Blog post array
const blogPosts = [
  {
    title: "How to Develop a Growth Mindset",
    image: "images/growth-mindset.jpg",
    description:
      "Discover the key principles and practices that can help you cultivate a growth mindset for success and resilience.",
    link: "blog-growth-mindset.html",
  },
  {
    title: "5 Daily Habits for Improved Productivity",
    image: "images/smart-habits.jpg",
    description:
      "Learn how to optimize your daily routine with these simple yet effective habits that can boost your productivity and well-being.",
    link: "blog-productivity.html",
  },
  {
    title: "The Power of Positive Affirmations",
    image: "images/positive-affirmations.jpg",
    description:
      "Explore the benefits of positive affirmations and how they can transform your mindset, beliefs, and overall outlook on life.",
    link: "blog-positive-affirmations.html",
  },
];

// Load blog posts dynamically
function loadBlogPosts() {
  const blogContainer = document.querySelector(".blog-preview");

  if (!blogContainer) return;
  blogContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();

  blogPosts.forEach((post) => {
    const article = document.createElement("div");
    article.classList.add("article");
    article.innerHTML = `
      <h3>${post.title}</h3>
      <img src="${post.image}" alt="${post.title}" class="article-img" loading="lazy">
      <div class="article-content">
        <p>${post.description}</p>
        <a href="${post.link}" class="btn">Read More</a>
      </div>
    `;
    fragment.appendChild(article);
  });

  blogContainer.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", loadBlogPosts);
