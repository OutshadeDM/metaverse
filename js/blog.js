function dropdown() {
  document.getElementById("category-content").classList.toggle("show");
}
function dropdown2() {
  document.getElementById("time-content").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".filter-dropbtn")) {
    var dropdowns = document.getElementsByClassName("filter-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

var buttons = document.getElementsByClassName("topic");
var containers = document.getElementsByClassName("card-container");
function activate(id) {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("clicked");
  }
  document.getElementById(id).classList.add("clicked");
  for (i = 0; i < containers.length; i++) {
    containers[i].style.display = "none";
  }
  document.getElementsByClassName(id)[0].style.display = "grid";
}

function more() {
  document.getElementById("more-btn").style.display = "none";
  document.getElementById("less-btn").style.display = "block";
  document.getElementById("bottom-2").style.display = "flex";
}
function less() {
  document.getElementById("less-btn").style.display = "none";
  document.getElementById("more-btn").style.display = "block";
  document.getElementById("bottom-2").style.display = "none";
}


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
