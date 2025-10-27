// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";



contract ArjunCoin is ERC20 {
uint owner;

constructor(uint256 _initialValue) ERC20("Arjun", "AR") {
    
    _mint(msg.sender, _initialValue);
    owner = msg.sender;
}

function mint(address to, uint256 amount) public {
    require(msg.sender == owner);
    _mint(to, amount);
}


 }
