# Owners, Authorities, and Common Solana Programs

## 1. Concept of Owners
In Solana, every account has an owner, which is usually a program. The owner program controls how the account's data can be modified. Only the owner program can change the account's data or transfer its lamports (Solana's native token).

## 2. Owners vs Authorities
- **Owner**: The program that controls the account's logic and permissions. Only the owner program can update the account.
- **Authority**: A public key (user or another account) that has permission to perform specific actions, like minting tokens or transferring assets. Authorities are set by the owner program and can be changed according to program logic.

## 3. Common Solana Programs

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
