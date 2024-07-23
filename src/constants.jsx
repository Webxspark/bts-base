const contract_address = "0xbB72226e0dFb18281BB2CBEC55De6E4BCe892c25";

const contract_abi = [
  {
    type: "function",
    name: "addNewUser",
    inputs: [
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "userData",
        type: "string",
        internalType: "string",
      },
      {
        name: "reportedAbuseCases",
        type: "string",
        internalType: "string",
      },
      {
        name: "token",
        type: "string",
        internalType: "string",
      },
      {
        name: "phone",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "fetchAllUsers",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct BreakTheSilence.UserData[]",
        components: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "userData",
            type: "string",
            internalType: "string",
          },
          {
            name: "reportedAbuseCases",
            type: "string",
            internalType: "string",
          },
          {
            name: "token",
            type: "string",
            internalType: "string",
          },
          {
            name: "phone",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAdmin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getUser",
    inputs: [
      {
        name: "phone",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct BreakTheSilence.UserData",
        components: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "userData",
            type: "string",
            internalType: "string",
          },
          {
            name: "reportedAbuseCases",
            type: "string",
            internalType: "string",
          },
          {
            name: "token",
            type: "string",
            internalType: "string",
          },
          {
            name: "phone",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "login_init",
    inputs: [
      {
        name: "phone",
        type: "string",
        internalType: "string",
      },
      {
        name: "token",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "removeUser",
    inputs: [
      {
        name: "phone",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setAdmin",
    inputs: [
      {
        name: "phone",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateReportedAbuseCases",
    inputs: [
      {
        name: "phone",
        type: "string",
        internalType: "string",
      },
      {
        name: "reportedAbuseCases",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateUser",
    inputs: [
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "userData",
        type: "string",
        internalType: "string",
      },
      {
        name: "reportedAbuseCases",
        type: "string",
        internalType: "string",
      },
      {
        name: "token",
        type: "string",
        internalType: "string",
      },
      {
        name: "phone",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateUserData",
    inputs: [
      {
        name: "phone",
        type: "string",
        internalType: "string",
      },
      {
        name: "userData",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "verifyToken",
    inputs: [
      {
        name: "phone",
        type: "string",
        internalType: "string",
      },
      {
        name: "token",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "nonpayable",
  },
];

export {contract_address, contract_abi}