$("#more-btn").click(function () {
  $(".hidden-rank").show();
  $("#less-btn").show();
  $("#more-btn").hide();
});
$("#less-btn").click(function () {
  $(".hidden-rank").hide();
  $("#less-btn").hide();
  $("#more-btn").show();
});
