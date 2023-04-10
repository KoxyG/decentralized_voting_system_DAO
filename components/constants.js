export const contractAddress = "0xA2Cc8e3A18A056c2090245DC97CC40D037387f90";
export const abi = [
  {
    inputs: [
      { internalType: "uint256", name: "_tenureInYears", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "DBallot__ElectionHasStarted", type: "error" },
  { inputs: [], name: "DBallot__ElectionHasTakenPlace", type: "error" },
  { inputs: [], name: "DBallot__InvalidCandidate", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "_nextElectionYear", type: "uint256" },
    ],
    name: "DBallot__NotElectionYear",
    type: "error",
  },
  { inputs: [], name: "DBallot__NotOwner", type: "error" },
  { inputs: [], name: "DBallot__VoterHasVoted", type: "error" },
  { inputs: [], name: "DBallot__VotingPeriodHasEnded", type: "error" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "_id", type: "uint256" },
      { indexed: false, internalType: "string", name: "_name", type: "string" },
      {
        indexed: false,
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_logoUrl",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_year",
        type: "uint256",
      },
    ],
    name: "CandidateAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_year",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_startDate",
        type: "uint256",
      },
    ],
    name: "ElectionStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_year",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_candidateId",
        type: "uint256",
      },
    ],
    name: "VoteCasted",
    type: "event",
  },
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "string", name: "_description", type: "string" },
      { internalType: "string", name: "_logoUrl", type: "string" },
    ],
    name: "addCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_candidateId", type: "uint256" },
    ],
    name: "castVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_electionYear", type: "uint256" },
      { internalType: "uint256", name: "_candidateId", type: "uint256" },
    ],
    name: "getCandidate",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "string", name: "logoUrl", type: "string" },
          { internalType: "uint256", name: "voteCount", type: "uint256" },
        ],
        internalType: "struct DBallot.Candidate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_electionYear", type: "uint256" },
    ],
    name: "getElectionStartDate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_electionYear", type: "uint256" },
    ],
    name: "getElectionWinner",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "string", name: "logoUrl", type: "string" },
          { internalType: "uint256", name: "voteCount", type: "uint256" },
        ],
        internalType: "struct DBallot.Candidate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextElectionYear",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_electionYear", type: "uint256" },
    ],
    name: "getTotalCandidatesCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_electionYear", type: "uint256" },
    ],
    name: "getTotalVotes",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_electionYear", type: "uint256" },
      { internalType: "address", name: "_voterAddress", type: "address" },
    ],
    name: "getVoter",
    outputs: [
      {
        components: [
          { internalType: "bool", name: "hasVoted", type: "bool" },
          {
            internalType: "uint256",
            name: "votedCandidateId",
            type: "uint256",
          },
        ],
        internalType: "struct DBallot.Voter",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_electionDurationInHours",
        type: "uint256",
      },
    ],
    name: "startElection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
