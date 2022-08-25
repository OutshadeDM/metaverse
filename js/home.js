function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

function myFunction() {
  let dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

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
    prevArrow: "<img class='a-left control-c prev slick-prev' src='../images/arrow-left.png'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='../images/arrow-right.png'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(".car-button").on("click", function () {
  alert("book now button clicked");
});
$(".release-plans").click(function () {
  window.location = "/signup-1.html";
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".explore")[0].classList.add("fadeIn");
    }
    if (!entry.isIntersecting) {
      document.querySelectorAll(".explore")[0].classList.remove("fadeIn");
    }
  });
});

observer.observe(document.querySelector(".explore"));

$(document).ready(function () {
  $(".responsive").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: $(".slick-slider-dots"),

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    // instead of a settings object
  });
});
