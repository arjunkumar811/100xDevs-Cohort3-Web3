## Context of todays class

1. Understanding what ETH and SOL solve over Bitcoin
2. Programs/Smart contract
3. Jargon specific to solana
4. Solana token program
5. Token 22 program

# Why solana?

Until now, we've gone through the following -

1. What are blockchains, how do they work under the hood
2. Public and Private keys, how you can use them to `sign` transactions that miners use to `verify` and credit/debit balances

In today's class, we'll understand about one of the biggest use-case that blockchains like Solana/ETH solve for - Programs/Smart contracts.

### Programs/Smart contracts

ETH was one of the first blockchains to introduce the `concept` of decentralized `state` / `programs`. These are popularly known as `smart contracts` on the ETH blockchain.

- Here is a simple ETH smart contract

  ```jsx
  // SPDX-License-Identifier: MIT
  pragma solidity ^0.8.0;

  contract Counter {
      uint public count;

      // Constructor to initialize count
      constructor() {
          count = 0;
      }

      // Function to increment the count
      function increment() public {
          count += 1;
      }

      // Function to decrement the count
      function decrement() public {
          require(count > 0, "Count cannot be negative");
          count -= 1;
      }

      // Function to get the current count
      function getCount() public view returns (uint) {
          return count;
      }
  }

  ```

- Here is a simple Node.js HTTP server that does something similar

  ```jsx
  const express = require("express");
  const app = express();
  const port = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Initialize count
  let count = 0;

  // Route to increment the count
  app.post("/increment", (req, res) => {
    count += 1;
    res.json({ count });
  });

  // Route to decrement the count
  app.post("/decrement", (req, res) => {
    if (count > 0) {
      count -= 1;
      res.json({ count });
    } else {
      res.status(400).json({ error: "Count cannot be negative" });
    }
  });

  // Route to get the current count
  app.get("/count", (req, res) => {
    res.json({ count });
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  ```

HTTP Servers are deployed on cloud providers like `GCP, Azure`

Smart contracts/programs are deployed on the `blockchain`

The way solana programs work is significantly different from other blockchains. Lets understand how.

# Accounts on Solana

### Accounts

On the Solana blockchain, an "account" is a fundamental data structure used to store various types of information.

1. **Data Storage**: Accounts on Solana are used to store data required by programs (smart contracts) or to maintain state
2. **Lamports**: Accounts hold a balance of Solana's native cryptocurrency, lamports. Lamports are used to pay for transaction fees and to rent the space that the account occupies on the blockchain.
3. **Programs:** On Solana, programs are special accounts that contain executable code. These accounts are distinct from regular data accounts in that they are designed to be executed by the blockchain when triggered by a transaction.

**Account with `data` and `lamports` but no data -** https://explorer.solana.com/address/4GQsAP5jYi5ysGF1GEnWiV3zJHZLRcLWhLCSuim6aAkL

**Account with `lamports` but no data -** https://solscan.io/account/Eg4F6LW8DD3SvFLLigYJBFvRnXSBiLZYYJ3KEePDL95Q

**Program -** https://solscan.io/account/TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
