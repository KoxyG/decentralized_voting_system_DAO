import { abi, contractAddress } from "./constants.js";

// Gets the voting date from the smart contract
// returns a Date object
async function getElectionStartDate(year = new Date().getFullYear()) {
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = await new ethers.Contract(contractAddress, abi, signer);

  try {
    const date = await contract.getElectionStartDate(year);
    return new Date(date);
  } catch (error) {
    console.log(error);
  }
}

// Vote for a candidate using their candidateId
async function castVote(candidateId) {
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = await new ethers.Contract(contractAddress, abi, signer);

  try {
    const txResponse = await contract.castVote(candidateId);
    await listenForTxMine(txResponse, provider);
  } catch (error) {
    console.log(error);
  }
}

// Gets the total number of candidates for an election year from the smart contract
async function getTotalCandidatesCount(year = new Date().getFullYear()) {
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = await new ethers.Contract(contractAddress, abi, signer);

  try {
    const totalCandidatesCount = await contract.getTotalCandidatesCount(year);
    console.log(`Total Candidates: ${totalCandidatesCount}`);
    return totalCandidatesCount.toNumber();
  } catch (error) {
    console.log(error);
  }
}

// Gets the candidate details of a candidate using the Id
//      for a particular election year from the smart contract
async function getCandidate(candidateId, year = new Date().getFullYear()) {
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = await new ethers.Contract(contractAddress, abi, signer);

  try {
    const candidate = await contract.getCandidate(year, candidateId);
    return {
      id: candidate.id.toNumber(),
      name: candidate.name,
      description: candidate.description,
      logoUrl: candidate.logoUrl,
      voteCount: candidate.voteCount.toNumber(),
    };
  } catch (error) {
    console.log(error);
  }
}

// Gets the total number of votes casted for an election year from the smart contract
async function getTotalVotes(year = new Date().getFullYear()) {
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = await new ethers.Contract(contractAddress, abi, signer);

  try {
    const totalVotes = await contract.getTotalVotes(year);
    return totalVotes.toNumber();
  } catch (error) {
    console.log(error);
  }
}

// Gets the details of a voter for a particular election year
//      using their address from the smart contract.
//      i.e if they voted for the election Year and for whom they voted for
async function getVoterDetails(year = new Date().getFullYear(), address) {
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = await new ethers.Contract(contractAddress, abi, signer);

  try {
    const voter = await contract.getVoter(year, address);
    const hasVoted = voter.hasVoted;
    return {
      hasVoted: hasVoted,
      votedCandidateId: hasVoted ? voter.votedCandidateId.toNumber() : -1,
    };
  } catch (error) {
    console.log(error);
  }
}

async function getElectionWinner(year = new Date().getFullYear()) {
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = await new ethers.Contract(contractAddress, abi, signer);

  const winner = await contract.getElectionWinner(year);
  return {
    id: winner.id,
    partyName: winner.partyName,
    voteCount: winner.voteCount,
  };
}

// Listens for vote event emitted by the smart contract
async function listenForVoteEvent() {
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = await new ethers.Contract(contractAddress, abi, signer);

  contract.on("VoteCasted", (voter, candidateId, year) => {
    console.log(
      `Vote Event: Voter: ${voter} CandidateId: ${candidateId} Year: ${year}`
    );
  });
}

function listenForTxMine(txResponse, provider) {
  console.log(`Mining ${txResponse.hash}`);
  return new Promise((resolve, reject) => {
    provider.once(txResponse.hash, (txReceipt) => {
      if (txReceipt.status === 0) {
        reject(new Error(`Transaction failed: ${txResponse.hash}`));
      } else {
        resolve(txReceipt);
      }
    });
  });
}

export {
  getTotalCandidatesCount,
  getCandidate,
  getTotalVotes,
  getVoterDetails,
  getElectionStartDate,
  castVote,
  getElectionWinner,
};
