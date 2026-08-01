// grab the hamburger icon and the nav menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// toggle the menu open/closed when hamburger is clicked
hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// close the menu when a link is clicked (useful on mobile)
const allLinks = navLinks.querySelectorAll("a");
allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});