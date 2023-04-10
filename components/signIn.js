import { getTotalCandidatesCount, getCandidate } from "./service.js";

/*INTEGRATED JAVASCRIPT FOR THE BUTTONS*/

var overlay = document.getElementById("myModal");
var show = document.getElementById("myBtn");
var show2 = document.getElementById("show-modal-1");
var close = document.getElementById("close-model-btn");
/**var span = document.getElementsByClassName("close")[0];**/

show.addEventListener("click", () => {
  overlay.style.display = "block";
});

/**span.addEventListener('click', () => {
            overlay.style.display = "none";
        });**/

show2.addEventListener("click", () => {
  overlay.style.display = "block";
});

close.addEventListener("click", () => {
  overlay.style.display = "none";
});

window.onclick = function (event) {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
};

const { ethereum } = window;
async function connectToMetaMask() {
  if (ethereum && ethereum.isMetaMask) {
    ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => async () => {
        const account = accounts[0];
        show.innerHTML = `${account.substr(0, 5)}...${account.substr(-4, 5)}`;
        console.log(accounts);
        window.document.location = "./voting_page.html";
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    alert("MetaMask is not installed!");
    console.log("MetaMask is not installed!");
  }
}

connectBtn.onclick = connectToMetaMask;
