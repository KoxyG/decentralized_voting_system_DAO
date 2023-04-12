import { getTotalCandidatesCount, getCandidate, castVote } from "./service.js";

const candidates = document.getElementById("candidates");
const candidatesDiv = document.getElementById("candidatesDiv");
const castVoteBtn = document.getElementById("castVote");
const connectBtn = document.getElementById("connect");
//   const loadingDiv = document.querySelectorAll(".overlay");
let voteId = -1;
//   showLoadingDiv("none");
castVoteBtn.style.display = "none";

castVoteBtn.addEventListener("click", async () => {
  if (voteId === -1) {
    alert("Please select a candidate");
    return;
  }
  try {
    await castVote(voteId);
    //   alert("Voting for candidate " + voteId);
    window.document.location = "./result.html";
  } catch (error) {
    alert(error);
  }
});

// Get candidate names
const year = new Date().getFullYear();
const totalCandidatesCount = await getTotalCandidatesCount(year);
const candidateNames = [];
for (let i = 0; i < totalCandidatesCount; i++) {
  const candidate = await getCandidate(i, year);
  candidateNames.push(candidate.name);
}

const { ethereum } = window;
async function connect() {
  if (ethereum && ethereum.isMetaMask) {
    try {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log(window.ethereum);
      connectBtn.innerText = `${ethereum.selectedAddress.slice(
        0,
        5
      )}...${ethereum.selectedAddress.slice(-4)}`;
      console.log("MetaMask connected");
      await getCandidates();
      showCandidates();
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("MetaMask is not installed!");
    console.log("MetaMask is not installed!");
  }
}

connect();

const getCandidates = async () => {
  candidatesDiv.style.display = "none";
  candidates.style.display = "none";
  for (let i = 0; i < totalCandidatesCount; i++) {
    // create div element with classes 'pt-3', 'wallet', and 'd-flex'
    const div = document.createElement("div");
    div.classList.add("pt-3", "box", "d-flex");

    // create img element with src attribute and classes 'rounded-circle'
    const img = document.createElement("img");
    img.src = "images/MetaMask_Fox.svg.png";
    img.classList.add("rounded-circle");
    img.style.width = "25px";
    img.style.height = "25px";

    // create p element with text content 'MetaMask'
    const p = document.createElement("p");
    p.textContent = candidateNames[i];

    // append img and p elements to div element
    div.appendChild(img);
    div.appendChild(p);

    // append div element to candidatesDiv
    candidates.appendChild(div);
  }
  candidatesDiv.appendChild(candidates);

  const candidate = document.getElementsByClassName("box");
  for (let i = 0; i < candidate.length; i++) {
    candidate[i].onclick = function () {
      candidate[voteId == -1 ? 0 : voteId].style.backgroundColor =
        "rgba(125, 166, 220, 0.05)";
      candidate[i].style.backgroundColor = "rgb(255, 255, 255, 0.5)";
      voteId = i;
    };
  }
};

// getCandidates();

function showCandidates() {
  candidatesDiv.style.display = "block";
  candidates.style.display = "block";
  castVoteBtn.style.display = "block";
}
//   function showLoadingDiv(property) {
//     loadingDiv[0].style.display = property;
//     loadingDiv[1].style.display = property;
//   }
