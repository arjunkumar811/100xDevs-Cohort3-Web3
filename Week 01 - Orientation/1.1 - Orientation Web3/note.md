# Web3 Cohort | Orientation

Welcome to the **Web3 Cohort Orientation**!  
This document includes all content shared from the interactive orientation, including discussions, examples, AI prompts, and assignments.


## 🌍 Why Blockchains?

### 📈 Inflating Currencies
Governments have been printing currencies left, right, and center. This leads to:
- Increasing inflation
- Rising prices of goods
- Devaluation of cash

**💡 Insight**: Holding cash is a losing bet. It's better to hold assets like Gold, Stocks, or Real Estate than currencies like USD or INR.

---

### 🏦 Fractional Reserve Banking
- Banks don’t hold your full deposits.
- Most of your money is loaned out.
- During a bank run, banks can’t return everyone's money.

**Example**:  
Silicon Valley Bank collapsed in 2022. Most Y Combinator startups had funds there. They were **bailed out**, but otherwise, many startups could’ve died.

---

### 🏛️ Bailouts

In 2008, the Financial Crisis was caused by **Mortgage-Backed Securities (MBS)**.

Even though Wall Street banks were responsible, the **government bailed them out using taxpayer money**.

🎬 **Recommended Movie**: *The Big Short* — (Watched ~5 times!)

---

### 💸 INR Depreciation & Fiat Issues
Currencies like INR and JPY have depreciated significantly.

> Currencies are no longer backed by physical assets like gold.

---

## 🔐 Intro to Hashing

Hashing is the process of converting any input into a fixed-length string.

### Properties of Good Hash Functions:
- ✅ **Deterministic**
- 🚀 **Fast Computation**
- 🔒 **Pre-image Resistance**
- 🎲 **Small changes = Large output change**
- ❌ **Collision Resistance**

---

### ❓ Custom Hash Algorithm Thought Experiment

> Is this a hashing algorithm?

If you “hash” a string by increasing each alphabet by one — does it meet the above criteria?

👉 **Hint**: It doesn't.

---

### 🔧 Try SHA-256

🔗 [Try SHA-256 Online](https://emn178.github.io/online-tools/sha256.html)

### Node.js Example
```js
const crypto = require('crypto');

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash);
