// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

contract Money {
uint totalMoney;

    function deposit() public  payable {
        totalMoney += msg.value;
    }

    function drain(address payable ad) public {
      payable(ad).transfer(totalMoney);
    }
}