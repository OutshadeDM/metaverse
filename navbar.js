const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  // hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// window.onclick = function (event) {
//   if (navMenu.style.left == "0") {
//     if (!event.target.matches(".nav-menu")) {
//       navMenu.classList.toggle("active");
//     }
//   }
// };

function myFunction() {
  let dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}
