$(document).ready(function () {
  $(".responsive").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='../images/arrow-left.png'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='../images/arrow-right.png'>",
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
        centerMode: true,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// functionality of changing visibility in public and private
$(document).ready(function () {
  $("input[name=visibility]").on("change", function () {
    var n = $(this).val();
    console.log(n);
    if (n === "private") {
      $("#price-div").hide();
      $("#invitee-div").removeClass("disabled");
    }
    if (n === "public") {
      $("#price-div").show();
      $("#invitee-div").addClass("disabled");
    }
  });
});

//Getting values array

let urlString = window.location.href;
let paramString = urlString.split("?")[1];
let paramArray = paramString.split("&");
var values = [];
for (i = 0; i < paramArray.length; i++) {
  values[i] = paramArray[i].split("=")[1];
}

// accessing dom elements
var date = document.getElementById("dateVal");
var time = document.getElementById("timeVal");
var duration = document.getElementById("durVal");
var capacity = document.getElementById("capVal");

// converting time into 12 hr format from url encoded form
var timeStr = values[1].split("%3A");
var timeHr = timeStr[0],
  timeMin = timeStr[1],
  AmPm = "AM";
if (timeHr > 12) {
  timeHr = timeHr - 12;
  AmPm = "PM";
}
// populating date field
date.innerHTML += values[0];

// populating time field
time.innerHTML += timeHr + " : " + timeMin + " " + AmPm;

// populating duration field
duration.innerHTML += values[2] + " Hours";

// populating capacity field
var domCap;
switch (values[3]) {
  case "1":
    domCap = "0-5";
    break;
  case "2":
    domCap = "5-10";
    break;
  case "3":
    domCap = "10-15";
    break;
  case "4":
    domCap = "15-20";
    break;
  case "5":
    domCap = "20-25";
    break;
  case "6":
    domCap = "25-30";
    break;

  default:
    break;
}
capacity.innerHTML += domCap;

// populating image src
var src = "../images/" + values[4] + ".png";
document.getElementById("template-img").src = src;

// placing text over image
document.getElementsByClassName("left-text")[0].innerHTML = values[4];
