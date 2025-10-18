/* A constructor in Solidity is a special function that is executed only once during the
deployment of the contract. Its primary purpose is to initialize the contract's state
variables and set up any required logic when the contract is deployed to the Ethereum
blockchain.  */

// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Cal {

    uint num = 0;

    constructor(uint _num) {
        num = _num;
    }
} 


--------------------------------------------------
// ABI

[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]


// Bytecode 


60806040525f5f553480156011575f5ffd5b5060405160db38038060db8339818101604052810190602f9190606c565b805f81905550506092565b5f5ffd5b5f819050919050565b604e81603e565b81146057575f5ffd5b50565b5f815190506066816047565b92915050565b5f60208284031215607e57607d603a565b5b5f608984828501605a565b91505092915050565b603e80609d5f395ff3fe60806040525f5ffdfea2646970667358221220cfc884608ee8b8a2d72342cd525981c806f3a6f6f606149937e01149347c48c464736f6c634300081e0033