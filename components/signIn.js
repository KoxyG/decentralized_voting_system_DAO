/*INTEGRATED JAVASCRIPT FOR THE BUTTONS*/

var overlay = document.getElementById("myModal");
var show = document.getElementById("myBtn");
var show2 = document.getElementById("show-modal-1");
var close = document.getElementById("close-model-btn");
const connectBtn = document.getElementById("metaMaskBtn");
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
    try {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });
      //   console.log(window.ethereum);
      //   show.innerText = `${ethereum.selectedAddress.slice(
      //     0,
      //     5
      //   )}...${ethereum.selectedAddress.slice(-4)}`;
      overlay.style.display = "none";
      window.document.location = "./voting_page.html";
      console.log("MetaMask connected");
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("MetaMask is not installed!");
    console.log("MetaMask is not installed!");
  }
}

connectBtn.onclick = connectToMetaMask;
