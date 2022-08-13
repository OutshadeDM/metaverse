$(document).ready(function () {
  $(".responsive").slick({
    dots: true,
    arrows: true,
    variableWidth: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4.5,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
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

// Set the date we're counting down to
var countDownDate = new Date().getTime() + 26746000; // millisec value of 7hr 25min 46 sec

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"

  var timers = document.getElementsByClassName("time");

  for (i = 0; i < timers.length; i++) {
    timers[i].innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
  }

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    for (i = 0; i < timers.length; i++) {
      timers[i].innerHTML = "EXPIRED";
    }
  }
}, 1000);

$(".bid-btn").click(function () {
  window.location = "/Market-place-2.html";
});
