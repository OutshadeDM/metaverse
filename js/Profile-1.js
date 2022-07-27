var right = document.getElementsByClassName("container-2")[0].style.height;
var left = document.getElementsByClassName("container-1")[0].style.height;
console.log(right);
if (left > right) {
  document.getElementsByClassName("container-2")[0].style.height = left;
} else {
  document.getElementsByClassName("container-1")[0].style.height = right;
}

$("#name").attr("value", "Brunom End");
$("#username").attr("value", "Brunom");
$("#phone-number").attr("value", "9876543210");
$("#email").attr("value", "brunom@gmail.com");
$("#social").attr("value", "brunom@instagram.com");

$(".input-tags").focus(function () {
  $("#submit").show();
  $(".achievements").hide();
});
