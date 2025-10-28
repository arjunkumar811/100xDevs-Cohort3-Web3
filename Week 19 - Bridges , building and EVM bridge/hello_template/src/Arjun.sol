// Assignment - Build a contract that lets me lock my erc-20 tokens somewhere. 

// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract LockToken {
    address public TokenAddress;
    mapping(address => uint) pendingBalance;


constructor(address _TokenAddress) {
 TokenAddress = _TokenAddress;
}

function deposit(uint amount) public {
require(IERC20(TokenAddress).allowance(msg.sender, address(this)) >= amount);
IERC20(TokenAddress).transferFrom(msg.sender, address(this), amount);
pendingBalance[msg.sender] += amount;
}

function withdraw() public {
    uint remainBalance = pendingBalance[msg.sender];
IERC20(TokenAddress).transfer(msg.sender, remainBalance);
pendingBalance[msg.sender] = 0;
}

}