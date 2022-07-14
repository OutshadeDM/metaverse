var right = document.getElementsByClassName("container-2")[0].style.height;
var left = document.getElementsByClassName("container-1")[0].style.height;
console.log(right);
if (left > right) {
  document.getElementsByClassName("container-2")[0].style.height = left;
} else {
  document.getElementsByClassName("container-1")[0].style.height = right;
}
