var today = new Date().toISOString().split("T")[0];
document.getElementById("date").setAttribute("min", today);

function dropdown() {
  document.getElementById("category-event-content").classList.toggle("show");
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

$(".radio-btn").click(() => {
  var date = $("#date").first().val();
  var time = $("#time").first().val();
  var duration = $("#duration").first().val();
  var capacity = $("#capacity").first().val();

  if (
    date === null ||
    time === null ||
    duration === null ||
    capacity === null
  ) {
    alert("PLease fill all event details");
  } else {
    document.getElementById("form").submit();
  }
});

function more() {
  document.getElementById("more-btn").style.display = "none";
  document.getElementById("less-btn").style.display = "block";
  document.getElementById("cards-2").style.display = "grid";
}
function less() {
  document.getElementById("less-btn").style.display = "none";
  document.getElementById("more-btn").style.display = "block";
  document.getElementById("cards-2").style.display = "none";
}
