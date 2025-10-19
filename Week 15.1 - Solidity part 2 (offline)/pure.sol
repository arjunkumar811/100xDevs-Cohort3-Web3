/*
pure functions

In Solidity, pure functions are functions that do not
read from or modify the blockchain state. They only
rely on their input parameters to perform
calculations or operations and return a result.
Importantly, pure functions do not interact with any
state variables or external contracts.  */

function sumAndMul(uint a, uint b) public pure view returns (uint, uint) {
return (a + b, a * b);
}