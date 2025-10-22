// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

contract ArjunCoin {
string Name = "ArjunCoin";
string symbol = "AR";
uint public TotalSupply;
address public owner;
mapping ( address => uint ) public  balance;


constructor () {
  owner = msg.sender;
}


function mint(uint amount) public {
  require(owner == msg.sender);
 balance[owner] += amount; // increase owner bal
 TotalSupply += amount; // increase total supply
}



function mintTo(uint amount , address to) public {
require(owner == msg.sender);
balance[to] += amount; // increase owner bal of to
 TotalSupply += amount; // increase total supply
}

function Transfer(uint amount, address to) public {
  uint existingBalance = balance[msg.sender];
  require(existingBalance >= amount); // check if sender has enough balance
  balance[msg.sender] -= amount; // decrease sender balance
  balance[to] += amount; // increase receiver balance

}

function Burn (uint amount) public {
  uint balance = balance[msg.sender];
  require(balance >= amount);
  balance[msg.sender] -= amount;
  TotalSupply -= amount
}

}

// Mint
// MintTO
// Transfer
// Burn

function mint(uint amount) public payable {
  require(msg.sender == owner);
  balance[owner] += amount;
  TotalSupply  += amount;
}

function mintTo(uint amount, address to) public payable {
require(owner == msg.sender);
balance[to] += amount;
TotalSupply += amount;
}


function transfer(uint amount, address to) public payable {
  uint exist = balance[msg.sender];
  require(exist >= amount)
balance[msg.sender] -= amount;
balance[to] += amount
}

function Burn (uint amount) {
   uint balance = balance[msg.sender];
  require(balance >= amount);
  balance[msg.sender] -= amount;
  TotalSupply -= amount
}