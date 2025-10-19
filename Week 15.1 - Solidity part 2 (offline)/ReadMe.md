Solidity part 2 (offline)

## Slides - https://www.canva.com/design/DAGWfh7FkYs/atPF0eKRrFcVvxIWs1R3Sw/edit

# Memory vs stack vs storage

## In Solidity, Memory, Stack, and Storage are three distinct
## locations where data can be stored. Each has its own
 ## characteristics, use cases, and costs.

 # Storage

 ## Storage refers to the persistent data that is
 ## saved on the blockchain. It is used for state
 ## variables that you declare at the contract
 ## level. Data stored in storage is written to the
 ## blockchain and remains there permanently,
 ## across function calls and transactions, until
 ## it is explicitly modified.


 # Memory

## Memory refers to temporary data storage
## that only exists during the execution of a
## function. It is cheaper than storage
## because it is not stored on the blockchain
## and is only kept in the node's memory
## while the function is executing. Once the
## function finishes execution, the data is
## discarded.



# Stack

## The stack in Solidity is a limited, low-level
## data structure used to store small, temporary
## values that are used during the execution of a
## function. It is akin to a "call stack" in other
## programming languages. When you call a
## function, the EVM pushes temporary values
## (such as function arguments and local
## variables) onto the stack