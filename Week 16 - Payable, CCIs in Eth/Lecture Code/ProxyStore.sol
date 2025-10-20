// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

interface IStoreage {
    function add() external ;
    function getRes() external  view returns (uint);
}


contract Contract2 {
 
  constructor () {

  }

  function proxyAdd() public  {
    IStoreage(0x8059B0AE35c113137694Ba15b2C3585aE77Bb8E9).add();
  }

  function ProxyGet() public view returns (uint)  {
    uint value = IStoreage(0x8059B0AE35c113137694Ba15b2C3585aE77Bb8E9).getRes();
    return  value;
  }

}