let social_link = document.getElementById("social-link");

let plus_btn = document.getElementById("plus");
let minus_btn = document.getElementById("minus");

var count = 0;

plus_btn.addEventListener("click", () => {
  if (count < 4) {
    social_link.innerHTML += `<div class="social-input"><input type="search" value="https://"><br></div> `;
    count++;
    minus_btn.style.display = "inline-block";
  }
});

minus_btn.addEventListener("click", () => {
  document.getElementsByClassName("social-input")[count - 1].remove();
  count--;
  if (count == 0) {
    minus_btn.style.display = "none";
  }
});
