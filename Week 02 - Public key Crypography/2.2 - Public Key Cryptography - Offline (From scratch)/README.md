# Public Key Cryptography
# Steps 1 - 10

## 1 step

# Banks vs Blockchains

## Goal of today's class

- Create a simple web based wallet
- Look at the codebase of some wallets to see how they generate private keys

## How banks do Auth

In traditional banks, you have a username and password that are enough for you to:

- Look at your funds
- Transfer funds
- Look at your existing transactions

![notion image](https://example.com/bank-auth-image)

## How Blockchains do auth

If you ever want to create an account on a blockchain, you need to generate a public-private keypair.

### Public private Keypair

A public-private key pair is a set of two keys used in asymmetric cryptography. These two keys have the following characteristics:

**Public Key:** The public key is a string that can be shared openly.

![notion image](https://example.com/public-key-image)

For example - https://etherscan.io/address/0xD9a657ACB3960DB92AaaA32942019bD3c473FCCB

**Private key:** The private key is a secret string that must be kept confidential.

![notion image](https://example.com/private-key-image)

---

## Key Differences

| Banks                      | Blockchains                  |
| -------------------------- | ---------------------------- |
| Username + Password        | Public-Private Key Pair      |
| Centralized Authentication | Cryptographic Authentication |
| Account Recovery Possible  | Self-Custody (No Recovery)   |
| Regulated Environment      | Decentralized Environment    |

## Learning Objectives

By the end of this module, you should understand:

- The fundamental difference between traditional banking authentication and blockchain authentication
- How public-private key pairs work in blockchain systems
- The importance of private key security
- How to generate and manage cryptocurrency wallets
