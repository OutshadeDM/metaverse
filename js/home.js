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
