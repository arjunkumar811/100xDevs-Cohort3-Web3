
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

import "./vechile.sol";

contract Car is  Vechile {
   uint num;
     

    constructor(string memory _brand, uint _num) Vechile(_brand) {
        num = _num;
    }

    function description() public pure override  returns  (string memory) {
        return  "HI iam a the car";
    }
}