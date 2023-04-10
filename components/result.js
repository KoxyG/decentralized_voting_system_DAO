import { getTotalCandidatesCount, getCandidate } from "./service.js";

const year = new Date().getFullYear();
const totalCandidatesCount = await getTotalCandidatesCount(year);
const candidates = [];
const candidateNames = [];
const voteCounts = [];
for (let i = 0; i < totalCandidatesCount; i++) {
  const candidate = await getCandidate(i, year);
  const partyName = candidate.name;
  const voteCount = candidate.voteCount;

  // Get the short name of the party
  const shortName = partyName.includes("(")
    ? partyName.substring(partyName.indexOf("(") + 1, partyName.indexOf(")"))
    : partyName;

  candidateNames.push(shortName);
  voteCounts.push(voteCount);

  candidates.push([shortName, voteCount]);
}

// Get the canvas element

//LINE CHART
var ctx1 = document.getElementById("myChart1").getContext("2d");
Chart.defaults.color = "white";
Chart.defaults.font.size = 12;

var myChart1 = new Chart(ctx1, {
  type: "line",
  data: {
    labels: candidateNames,
    datasets: [
      {
        label: "Vote Chart",
        data: voteCounts,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(254, 105, 56)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//DOUGHNUT CHART
var ctx = document.getElementById("myChart").getContext("2d");

// Define the data for the chart
var data = {
  labels: candidateNames,
  datasets: [
    {
      label: "Vote Percentage",
      data: voteCounts,
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(254, 105, 56)",
      ],
      hoverOffset: 4,
    },
  ],
};

// Create the chart
Chart.defaults.color = "white";

Chart.defaults.font.size = 12;
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    Option: {
      layout: {},
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Result",
      },
    },
  },
});

const home = function () {
  let secondBtn = document.querySelector("#GoHome");

  secondBtn.addEventListener("click", function () {
    window.document.location = "./landing_page.html";
  });
};

document.addEventListener("DOMContentLoaded", function () {
  home();
});
