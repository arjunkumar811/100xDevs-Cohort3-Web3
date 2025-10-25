// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "src/ArjunCoin.sol";

contract TestArjunCoin is Test {
    ArjunCoin c;

    function setUpTest() public {
        c = new ArjunCoin(0);
    }

    function testSimple() public {
        assertEq(uint(2), uint(2), "ok");
    }

   
}
