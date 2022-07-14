const ctx = document.getElementById("myChart").getContext("2d");
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(170, 34, 197, 1)");
gradient.addColorStop(1, "rgba(96, 91, 208, 0)");

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data_val = [200, 600, 300, 1200, 600, 1500, 800, 1200, 600, 1500, 800];
const data = {
  labels: labels,
  datasets: [
    {
      fill: true,
      backgroundColor: gradient,
      borderColor: "#fff",
      borderWidth: 1,
      data: data_val,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    elements: {
      point: {
        radius: 2,
      },
    },
    tension: 0.4,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
  plugins: {
    datalabels: {
      display: function (value, context) {
        return context.dataIndex === context.dataset.data.length - 1;
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);

var modal = document.getElementById("addCoin");

// Get the button that opens the modal
var btn = document.getElementById("coin-btn");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
