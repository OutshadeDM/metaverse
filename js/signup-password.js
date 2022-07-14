function showPassword() {
  var x = document.getElementById("one");
  var y = document.getElementById("two");

  if (x.type === "password" && y.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}
