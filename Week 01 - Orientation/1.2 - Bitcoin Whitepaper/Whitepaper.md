# 📄 Bitcoin Whitepaper Summary – 100xDevs Web3 Cohort 3.0

> **Paper Title:** *Bitcoin: A Peer-to-Peer Electronic Cash System*  
> **Author:** Satoshi Nakamoto  
> **Published:** October 31, 2008  
> **Link:** [Read Original Whitepaper](https://bitcoin.org/bitcoin.pdf)

---

## 📌 Introduction

- **Goal:** Build a **purely peer-to-peer version** of electronic cash.
- **Problem:** Online payments require **trusted third parties** (banks/financial institutions).
- **Core Issue:** Solving the **double-spending problem** — the risk that digital tokens can be duplicated and spent more than once.
- **Solution:** A **decentralized digital currency** system using cryptography and peer-to-peer networking.

---

## 💰 What Is an Electronic Coin in Bitcoin?

### 🔗 Definition:
An electronic coin = a **chain of digital signatures**. This chain keeps a **record of ownership** every time the coin is transferred.

### 🔁 How Ownership is Transferred:
- Each transaction contains:
  - A **hash of the previous transaction**
  - The **public key of the next owner**
- Signed by the **current owner’s private key**

### 🧾 Verification of Ownership:
- Anyone can verify a coin's legitimacy by:
  - Checking each **digital signature** in the chain.
  - Ensuring each transfer of ownership is valid.

---

## 🔐 Digital Signatures & Double-Spending

- **Digital Signatures** ensure:
  - Only the real owner can initiate a transaction.
  - Transactions are tamper-proof.
- **But:** They don't prevent someone from trying to **double-spend** the same coin.
- **Hence:** We need a global consensus on the transaction order.

---

## 🌐 Peer-to-Peer Network & Proof-of-Work (PoW)

### 🔄 How It Works:
- Transactions are timestamped and grouped into **blocks**.
- Each block is linked to the previous block — forming the **blockchain**.

### 🧮 Proof-of-Work (PoW):
- Miners must solve a **computational puzzle** (SHA-256 hash with leading zeros).
- This secures the network by making it **costly to alter** transaction history.

### 🔗 Longest Chain Rule:
- The **longest chain** (most PoW) is considered the valid version.
- Assumes majority of computing power is controlled by **honest nodes**.

---

## ⚙️ Network Structure & Operation

- Nodes **broadcast transactions and blocks** in a decentralized fashion.
- Nodes can **leave and rejoin** the network anytime.
- Upon rejoining, a node **adopts the longest chain** as the authoritative ledger.

---

## ⛏️ Mining, Incentives & Scarcity

- Miners are rewarded with:
  - **Newly minted Bitcoins** (block rewards)
  - **Transaction fees**
- **Block reward halves** every ~4 years (Halving).
- **Max supply**: 21 million BTC – introduces **digital scarcity** similar to gold.

---

## 📚 Technical Concepts

### 📌 Hashing:
- Bitcoin uses **SHA-256**.
- Produces a fixed-length output.
- Even a tiny change in input creates a drastically different hash.

### 🏁 Proof-of-Work Difficulty:
- Defined by the number of leading zeros required in the hash.
- Difficulty adjusts over time to ensure blocks are mined roughly every 10 minutes.

---

## 🧱 Blockchain = Decentralized Ledger

- Each block contains:
  - A list of validated transactions.
  - A **hash of the previous block** (linking blocks).
- Once added, blocks are **immutable** without redoing all previous PoW.

---

## 🔒 Security & 51% Attack

- The network is secure as long as **honest nodes > 50% hash power**.
- If a **malicious actor** controls >50%, they could:
  - Reverse their own transactions (double spend)
  - Block others’ transactions

---

## 🌍 Implications & Applications

- **Decentralization:** No central authority controls Bitcoin.
- **Trustless Finance:** Trust is placed in **math + code**, not institutions.
- **Borderless Payments:** Can be used globally without restrictions.
- **Pioneered DeFi & Crypto:** Foundation of the Web3 and cryptocurrency ecosystem.

---

## 🎥 Additional Resource

▶️ [Bitcoin Whitepaper Explained (with animations)](https://www.youtube.com/results?search_query=bitcoin+whitepaper+explained)

---

## 🧠 Contributors
- **Curated by:** 100xDevs Cohort 3.0
- **Based on:** Week 1 Orientation – Web3
