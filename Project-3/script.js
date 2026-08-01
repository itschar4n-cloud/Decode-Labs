// ============================
// HAMBURGER MENU
// ============================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// close menu when a link is clicked
const allNavLinks = navLinks.querySelectorAll("a");
allNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});


// ============================
// DARK MODE TOGGLE
// ============================
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
  // toggle the class on the body
  document.body.classList.toggle("dark-mode");

  // check current state and update button text
  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});


// ============================
// QUANTITY BUTTONS (+ / -)
// ============================
const qtyButtons = document.querySelectorAll(".qty-btn");

qtyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const targetId = button.getAttribute("data-target");
    const qtyDisplay = document.getElementById(targetId);

    let currentQty = parseInt(qtyDisplay.textContent);

    if (button.classList.contains("plus")) {
      currentQty = currentQty + 1;
    } else if (button.classList.contains("minus")) {
      // don't let quantity go below 1
      if (currentQty > 1) {
        currentQty = currentQty - 1;
      }
    }

    qtyDisplay.textContent = currentQty;
  });
});


// ============================
// ADD TO CART
// ============================
// keep track of cart totals in simple variables
let cartCount = 0;
let cartTotal = 0;

const cartCountDisplay = document.getElementById("cartCount");
const cartTotalDisplay = document.getElementById("cartTotal");

const addCartButtons = document.querySelectorAll(".add-cart-btn");

addCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const price = parseFloat(button.getAttribute("data-price"));
    const qtyId = button.getAttribute("data-qty");
    const quantity = parseInt(document.getElementById(qtyId).textContent);

    // update cart state
    cartCount = cartCount + quantity;
    cartTotal = cartTotal + (price * quantity);

    // update the page to show new totals
    cartCountDisplay.textContent = cartCount;
    cartTotalDisplay.textContent = cartTotal.toFixed(2);

    // quick visual feedback on the button
    button.textContent = "Added!";

    setTimeout(function () {
      button.textContent = "Add to Cart";
    }, 1000);
  });
});


// ============================
// FAQ ACCORDION
// ============================
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const faqItem = question.parentElement;
    const icon = question.querySelector(".faq-icon");

    // toggle this item open/closed
    faqItem.classList.toggle("active");

    // update the +/- icon based on state
    if (faqItem.classList.contains("active")) {
      icon.textContent = "−";
    } else {
      icon.textContent = "+";
    }
  });
});