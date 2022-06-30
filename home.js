const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  // hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function myFunction() {
  let dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}
// window.onclick = function (event) {
//   if (navMenu.style.left == "0") {
//     if (!event.target.matches(".nav-menu")) {
//       navMenu.classList.toggle("active");
//     }
//   }
// };

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   let dropdown2 = document.getElementById("myDropdown");
//   if (!event.target.matches(".dropbtn")) {
//     if (dropdown2.style.display === "block") {
//       dropdown2.style.display = "none";
//     }
//   }
// };

$(".nav-item").on("click", function () {
  $(".active").removeClass("active");
  $(this).addClass("active");
});

$(document).ready(function () {
  $(".center").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(".car-button").on("click", function () {
  alert("book now button clicked");
});

$(document).ready(function () {
  $(".single-item").slick({
    centered: true,
    arrows: true,
    centerPadding: "0",
    dots: true,
  });
});
