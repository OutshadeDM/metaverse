$(document).ready(function () {
  $(".center").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
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
          centerPadding: "10px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
