# Accounts, Owners, Authorities, and Common Solana Programs

## 1. Accounts
On Solana, all data is stored in "accounts" - similar to a key-value store where each entry is an account identified by a unique 32-byte address (Ed25519 PublicKey).

**Key Properties:**
- **Size Limit**: Up to 10MB of data storage
- **Rent Requirement**: SOL deposit proportional to data stored (refundable when closed)
- **AccountInfo Structure**: Contains lamports, data, owner, executable flag, and rent epoch
- **Types**: 
  - Program accounts (executable code, stateless)
  - Data accounts (program state, created by programs)

**Account Examples:**
- [Empty Account](https://explorer.solana.com/address/5gjLjKtBhDxWL4nwGKprThQwyzzNZ7XNAVFcEtw3rD4i) (System Program owned)
- [Token Account](https://explorer.solana.com/address/8FQvjBxFdR51wbZfQVaWbkjR2sNNxDLyabNePPmsyou9) (Token Program owned)
- [Program Account](https://explorer.solana.com/address/TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA) (BPF Loader owned)

## 2. Concept of Owners
In Solana, every account has an owner, which is usually a program. The owner program controls how the account's data can be modified. Only the owner program can change the account's data or transfer its lamports (Solana's native token).

## 3. Owners vs Authorities
- **Owner**: The program that controls the account's logic and permissions. Only the owner program can update the account.
- **Authority**: A public key (user or another account) that has permission to perform specific actions, like minting tokens or transferring assets. Authorities are set by the owner program and can be changed according to program logic.

## 4. Common Solana Programs

### System Program
The **System Program** is a core native program that handles fundamental operations:
- **New Account Creation**: Only the System Program can create new accounts
- **Space Allocation**: Sets the byte capacity for account data fields
- **Assign Program Ownership**: Can reassign account ownership to other programs
- **Lamport Transfers**: Handles SOL transfers between accounts

**Key Functions:**
- `SystemProgram.createAccount()` - Creates new accounts with specified space and ownership
- `SystemProgram.transfer()` - Transfers lamports between accounts
- `SystemProgram.assign()` - Changes account ownership

**Code Examples:**

1. **Create Account with Rent:**
```javascript
const { Keypair, Connection, SystemProgram, Transaction } = require('@solana/web3.js');

const payer = Keypair.fromSecretKey(/* your secret key */);
const connection = new Connection("https://api.devnet.solana.com");

async function createAccount() {
    const newAccount = Keypair.generate();
    const TOTAL_BYTES = 165;
    const lamports = await connection.getMinimumBalanceForRentExemption(TOTAL_BYTES);
    
    const transaction = new Transaction();
    transaction.add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: newAccount.publicKey,
            lamports: lamports,
            space: TOTAL_BYTES,
            programId: SystemProgram.programId,
        })
    );
    
    await connection.sendTransaction(transaction, [payer, newAccount]);
    console.log(`New account created at ${newAccount.publicKey.toBase58()}`);
}
```

2. **Transfer Lamports:**
```javascript
async function transferLamports() {
    const recipient = Keypair.generate();
    const lamports = await connection.getMinimumBalanceForRentExemption(0);
    
    const transaction = new Transaction();
    transaction.add(
        SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: recipient.publicKey,
            lamports,
        })
    );
    
    await connection.sendTransaction(transaction, [payer]);
    console.log(`Transferred to ${recipient.publicKey.toBase58()}`);
}
```

3. **Create Account with Custom Owner:**
```javascript
async function createAccountWithCustomOwner() {
    const newAccount = Keypair.generate();
    const customOwner = Keypair.generate();
    const TOTAL_BYTES = 165;
    const lamports = await connection.getMinimumBalanceForRentExemption(TOTAL_BYTES);
    
    const transaction = new Transaction();
    transaction.add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: newAccount.publicKey,
            lamports: lamports,
            space: TOTAL_BYTES,
            programId: customOwner.publicKey, // Custom owner instead of System Program
        })
    );
    
    await connection.sendTransaction(transaction, [payer, newAccount]);
    console.log(`Account created with custom owner: ${newAccount.publicKey.toBase58()}`);
}
```

### BPF Loader Program
The **BPF Loader** is the program designated as the "owner" of all other programs on the network (excluding Native Programs). It handles:
- **Program Deployment**: Deploys custom programs to the Solana network
- **Program Upgrades**: Manages upgrades to existing programs
- **Program Execution**: Executes custom programs when called

**Example Program**: [Deployed Program](https://explorer.solana.com/address/8rpHNPsyEJQEJjC2waWvUXyvCkYghCZndACoXs9sNKZg?cluster=devnet) on Solana Devnet

### Token Program
Manages fungible and non-fungible tokens, including minting, transferring, and burning.

## Summary
Owners define who can change account data, while authorities are granted specific permissions by programs. The System Program is fundamental for account management and SOL transfers. Understanding these concepts is key to building secure Solana applications.
