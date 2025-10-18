/* Try finishing the Calculator contract

(add, multiply, divide, subtract, getValue)  */


// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Cal {

    uint num = 0;

    constructor(uint _num) {
        num = _num;
    }

    function add(uint _value) public {
        num += _value;
    }

    function sub(uint _value) public  {
        num -= _value;
    }

    function mul(uint _value) public  {
        num *= _value;
    }

    function div(uint _value) public  {
        num /= _value;
    }

    function getSum() public view returns (uint) {
        return num;
    }


} 