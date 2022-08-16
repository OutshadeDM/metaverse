$(document).ready(function () {
  $(".responsive").slick({
    dots: true,
    infinite: false,
    arrows: true,
    variableWidth: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    onInit: function (e) {
      $(".slide-num").append(
        '<div class="slick-counter">' +
          parseInt(e.currentSlide + 1, 10) +
          " / " +
          e.slideCount +
          "</div>"
      );
    },
    onAfterChange: function (e) {
      $(".slide-num")
        .find(".slick-counter")
        .html(e.currentSlide + 1 + " / " + e.slideCount);
    },
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        arrows: false,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
$(document).ready(function () {
  $(".responsive-2").slick({
    dots: true,
    infinite: false,
    arrows: true,
    variableWidth: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    onInit: function (e) {
      $(".slide-num-2").append(
        '<div class="slick-counter-2">' +
          parseInt(e.currentSlide + 1, 10) +
          " / " +
          e.slideCount +
          "</div>"
      );
    },
    onAfterChange: function (e) {
      $(".slide-num-2")
        .find(".slick-counter-2")
        .html(e.currentSlide + 1 + " / " + e.slideCount);
    },
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        arrows: false,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

$(window).bind("resize", function (e) {
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function () {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});

$(".car-card").click(function () {
  window.location = "/Event-page-2.html";
});

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

