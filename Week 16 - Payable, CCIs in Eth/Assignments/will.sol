Create a Will Contract

Every user will deploy their own Will Contract.

When initialized, set the owner to be the person initializing.

The owner can define a recipient in the constructor.

Owner should be allowed to change the recipient.

Owner should be allowed to interact with the contract via a ping function.

If ping hasn’t been called for > 1 year, the recipient should be allowed to call a drain function.



// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

contract Will {
    uint startTime;
    uint TenYear;
    uint lastVisited;
    address owner;
    address payable recipient;
    


    constructor (address payable  _recipient) {
               TenYear = 1 hours * 24 * 365 * 10;
               startTime = block.timestamp;
               lastVisited = block.timestamp;
               owner = msg.sender;
               recipient =  _recipient;
    }

    modifier  onlyOnwer () {
        require(msg.sender == owner, "You are not the owner of this contract");_;
    }

    modifier onlyRecipient () {
        require(msg.sender == recipient, "You are not the recipient of this contract");_;
    }

    function deposit() public payable onlyOnwer {
            lastVisited = block.timestamp;
    }
    
    function ping() public onlyOnwer {
        lastVisited = block.timestamp;
    }

    function claim() external onlyRecipient {
            require(lastVisited < block.timestamp - TenYear);
            payable (recipient).transfer(address(this).balance);
    }

}