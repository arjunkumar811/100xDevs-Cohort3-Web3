
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract cal {

    uint number;
    address onwer;

    // constructor(uint _number) { 
    //     number = _number;
    // }

     constructor() { 
         onwer = msg.sender;
     }

    function add(uint a) public {
         number = number + a;
    }

    function getValue() public view returns (uint) {
        return number;
    }

    }




--------------------------------------------------------



// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract cal {

    uint number;
    address onwer;

    // constructor(uint _number) { 
    //     number = _number;
    // }

     constructor() { 
         onwer = msg.sender;
     }

    function add(uint a) public {
        require(msg.sender == onwer);
         number = number + a;
    }

    function sub(uint a) public {
        require(msg.sender == onwer);
         number = number + a;
    }

    function getValue() public view returns (uint) {
        return number;
    }

    }


----------------------------------------------------

// Solution -> Modifier



// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract cal {

    uint number;
    address onwer;

    // constructor(uint _number) { 
    //     number = _number;
    // }

     constructor() { 
         onwer = msg.sender;
     }


     modifier onlyOwner() {
       require(msg.sender == onwer);
       _; // Next 
     }

    function add(uint a) public onlyOwner {
         number = number + a;
    }

    function sub(uint a) public onlyOwner {
         number = number + a;
    }

    function getValue() public view returns (uint) {
        return number;
    }

    }
