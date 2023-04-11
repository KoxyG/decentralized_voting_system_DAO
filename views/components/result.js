import {
  getTotalCandidatesCount,
  getCandidate,
  getTotalVotes,
} from "./service.js";
import { abi, contractAddress } from "./constants.js";

const year = new Date().getFullYear();
const totalCandidatesCount = await getTotalCandidatesCount(year);
let totalVotes = await getTotalVotes(year);
const candidates = [];
const candidateNames = [];
let voteCounts = [];
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

document.addEventListener("DOMContentLoaded", function () {});

const percentBox = document.querySelector(".percentBox");
document.querySelector(".totalVotes").textContent = totalVotes;
const addBox = async () => {
  for (let i = 0; i < totalCandidatesCount; i++) {
    // create div element with classes
    const div = document.createElement("div");
    div.classList.add("box");

    const leftDiv = document.createElement("div");
    leftDiv.classList.add("left");

    const color = document.createElement("div");
    color.classList.add(`color${(i % 4) + 1}`);

    const leftH4 = document.createElement("h4");
    leftH4.textContent = candidateNames[i];
    leftH4.classList.add("part", "pt-3");

    leftDiv.appendChild(color);
    leftDiv.appendChild(leftH4);

    const rightH4 = document.createElement("h4");
    rightH4.textContent = voteCounts[i];
    rightH4.classList.add("percent", "pt-3");

    div.appendChild(leftDiv);
    div.appendChild(rightH4);

    percentBox.appendChild(div);
  }
};

addBox();

const home = function () {
  let secondBtn = document.querySelector("#GoHome");

  secondBtn.addEventListener("click", function () {
    // window.document.location = "./landing_page.html";
    voteCounts[2] += 1;
    totalVotes += 1;
    // window.location.reload();
    addBox();
  });
};
home();

// Listens for vote event emitted by the smart contract
async function listenForVoteEvent() {
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = await new ethers.Contract(contractAddress, abi, signer);

  contract.on("VoteCasted", (voter, candidateId, year) => {
    console.log(
      `Vote Event: Voter: ${voter} CandidateId: ${candidateId} Year: ${year}`
    );
    window.location.reload();
  });
}
listenForVoteEvent();
