$(document).ready(function () {
  $(".responsive").slick({
    dots: true,
    infinite: false,
    arrows: true,
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
