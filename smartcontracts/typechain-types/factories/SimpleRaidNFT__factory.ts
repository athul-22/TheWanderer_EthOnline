/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SimpleRaidNFT, SimpleRaidNFTInterface } from "../SimpleRaidNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040518060400160405280600781526020016626bcaa37b5b2b760c91b815250604051806040016040528060038152602001624d544b60e81b815250816000908161005c9190610110565b5060016100698282610110565b5050506101ce565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061009b57607f821691505b6020821081036100bb57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561010b57806000526020600020601f840160051c810160208510156100e85750805b601f840160051c820191505b8181101561010857600081556001016100f4565b50505b505050565b81516001600160401b0381111561012957610129610071565b61013d816101378454610087565b846100c1565b6020601f82116001811461017157600083156101595750848201515b600019600385901b1c1916600184901b178455610108565b600084815260208120601f198516915b828110156101a15787850151825560209485019460019092019101610181565b50848210156101bf5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b610fe7806101dd6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636871ee401161008c578063a22cb46511610066578063a22cb465146101d6578063b88d4fde146101e9578063c87b56dd146101fc578063e985e9c51461020f57600080fd5b80636871ee40146101a557806370a08231146101ad57806395d89b41146101ce57600080fd5b8063095ea7b3116100c8578063095ea7b31461015757806323b872dd1461016c57806342842e0e1461017f5780636352211e1461019257600080fd5b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd366004610c27565b610222565b60405190151581526020015b60405180910390f35b61011f610274565b60405161010e9190610c94565b61013f61013a366004610ca7565b610306565b6040516001600160a01b03909116815260200161010e565b61016a610165366004610cdc565b61032f565b005b61016a61017a366004610d06565b61033e565b61016a61018d366004610d06565b6103ce565b61013f6101a0366004610ca7565b6103ee565b61016a6103f9565b6101c06101bb366004610d43565b61041d565b60405190815260200161010e565b61011f610465565b61016a6101e4366004610d5e565b610474565b61016a6101f7366004610db0565b61047f565b61011f61020a366004610ca7565b610496565b61010261021d366004610e94565b61050b565b60006001600160e01b031982166380ac58cd60e01b148061025357506001600160e01b03198216635b5e139f60e01b145b8061026e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461028390610ec7565b80601f01602080910402602001604051908101604052809291908181526020018280546102af90610ec7565b80156102fc5780601f106102d1576101008083540402835291602001916102fc565b820191906000526020600020905b8154815290600101906020018083116102df57829003601f168201915b5050505050905090565b600061031182610539565b506000828152600460205260409020546001600160a01b031661026e565b61033a828233610572565b5050565b6001600160a01b03821661036d57604051633250574960e11b8152600060048201526024015b60405180910390fd5b600061037a83833361057f565b9050836001600160a01b0316816001600160a01b0316146103c8576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610364565b50505050565b6103e98383836040518060200160405280600081525061047f565b505050565b600061026e82610539565b600680546000918261040a83610f01565b91905055905061041a3382610678565b50565b60006001600160a01b038216610449576040516322718ad960e21b815260006004820152602401610364565b506001600160a01b031660009081526003602052604090205490565b60606001805461028390610ec7565b61033a338383610692565b61048a84848461033e565b6103c884848484610731565b60606104a182610539565b5060006104b960408051602081019091526000815290565b905060008151116104d95760405180602001604052806000815250610504565b806104e38461085a565b6040516020016104f4929190610f28565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000818152600260205260408120546001600160a01b03168061026e57604051637e27328960e01b815260048101849052602401610364565b6103e983838360016108ed565b6000828152600260205260408120546001600160a01b03908116908316156105ac576105ac8184866109f3565b6001600160a01b038116156105ea576105c96000856000806108ed565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b03851615610619576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b61033a828260405180602001604052806000815250610a57565b6001600160a01b0382166106c457604051630b61174360e31b81526001600160a01b0383166004820152602401610364565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b156103c857604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610773903390889087908790600401610f57565b6020604051808303816000875af19250505080156107ae575060408051601f3d908101601f191682019092526107ab91810190610f94565b60015b610817573d8080156107dc576040519150601f19603f3d011682016040523d82523d6000602084013e6107e1565b606091505b50805160000361080f57604051633250574960e11b81526001600160a01b0385166004820152602401610364565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b1461085357604051633250574960e11b81526001600160a01b0385166004820152602401610364565b5050505050565b6060600061086783610a6e565b600101905060008167ffffffffffffffff81111561088757610887610d9a565b6040519080825280601f01601f1916602001820160405280156108b1576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846108bb57509392505050565b808061090157506001600160a01b03821615155b156109c357600061091184610539565b90506001600160a01b0383161580159061093d5750826001600160a01b0316816001600160a01b031614155b8015610950575061094e818461050b565b155b156109795760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610364565b81156109c15783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b6109fe838383610b46565b6103e9576001600160a01b038316610a2c57604051637e27328960e01b815260048101829052602401610364565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610364565b610a618383610bac565b6103e96000848484610731565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610aad5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610ad9576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610af757662386f26fc10000830492506010015b6305f5e1008310610b0f576305f5e100830492506008015b6127108310610b2357612710830492506004015b60648310610b35576064830492506002015b600a831061026e5760010192915050565b60006001600160a01b03831615801590610ba45750826001600160a01b0316846001600160a01b03161480610b805750610b80848461050b565b80610ba457506000828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160a01b038216610bd657604051633250574960e11b815260006004820152602401610364565b6000610be48383600061057f565b90506001600160a01b038116156103e9576040516339e3563760e11b815260006004820152602401610364565b6001600160e01b03198116811461041a57600080fd5b600060208284031215610c3957600080fd5b813561050481610c11565b60005b83811015610c5f578181015183820152602001610c47565b50506000910152565b60008151808452610c80816020860160208601610c44565b601f01601f19169290920160200192915050565b6020815260006105046020830184610c68565b600060208284031215610cb957600080fd5b5035919050565b80356001600160a01b0381168114610cd757600080fd5b919050565b60008060408385031215610cef57600080fd5b610cf883610cc0565b946020939093013593505050565b600080600060608486031215610d1b57600080fd5b610d2484610cc0565b9250610d3260208501610cc0565b929592945050506040919091013590565b600060208284031215610d5557600080fd5b61050482610cc0565b60008060408385031215610d7157600080fd5b610d7a83610cc0565b915060208301358015158114610d8f57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610dc657600080fd5b610dcf85610cc0565b9350610ddd60208601610cc0565b925060408501359150606085013567ffffffffffffffff811115610e0057600080fd5b8501601f81018713610e1157600080fd5b803567ffffffffffffffff811115610e2b57610e2b610d9a565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610e5a57610e5a610d9a565b604052818152828201602001891015610e7257600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60008060408385031215610ea757600080fd5b610eb083610cc0565b9150610ebe60208401610cc0565b90509250929050565b600181811c90821680610edb57607f821691505b602082108103610efb57634e487b7160e01b600052602260045260246000fd5b50919050565b600060018201610f2157634e487b7160e01b600052601160045260246000fd5b5060010190565b60008351610f3a818460208801610c44565b835190830190610f4e818360208801610c44565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610f8a90830184610c68565b9695505050505050565b600060208284031215610fa657600080fd5b815161050481610c1156fea264697066735822122096ac6f706fec2e1cc80eb01f2ee6aa6ab4ad2b8a7dac0bff10ded57b6ec47c1964736f6c634300081a0033";

type SimpleRaidNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleRaidNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleRaidNFT__factory extends ContractFactory {
  constructor(...args: SimpleRaidNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SimpleRaidNFT";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleRaidNFT> {
    return super.deploy(overrides || {}) as Promise<SimpleRaidNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SimpleRaidNFT {
    return super.attach(address) as SimpleRaidNFT;
  }
  connect(signer: Signer): SimpleRaidNFT__factory {
    return super.connect(signer) as SimpleRaidNFT__factory;
  }
  static readonly contractName: "SimpleRaidNFT";
  public readonly contractName: "SimpleRaidNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleRaidNFTInterface {
    return new utils.Interface(_abi) as SimpleRaidNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleRaidNFT {
    return new Contract(address, _abi, signerOrProvider) as SimpleRaidNFT;
  }
}
