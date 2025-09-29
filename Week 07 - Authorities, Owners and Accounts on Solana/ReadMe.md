# Owners, Authorities, and Common Solana Programs

## 1. Concept of Owners
In Solana, every account has an owner, which is usually a program. The owner program controls how the account's data can be modified. Only the owner program can change the account's data or transfer its lamports (Solana's native token).

## 2. Owners vs Authorities
- **Owner**: The program that controls the account's logic and permissions. Only the owner program can update the account.
- **Authority**: A public key (user or another account) that has permission to perform specific actions, like minting tokens or transferring assets. Authorities are set by the owner program and can be changed according to program logic.

## 3. Common Solana Programs
- **System Program**: Handles basic account creation, lamport transfers, and assignment of account owners.
- **BPF Loader Program**: Used to deploy and upgrade Solana programs (smart contracts).
- **Token Program**: Manages fungible and non-fungible tokens, including minting, transferring, and burning.

## Summary
Owners define who can change account data, while authorities are granted specific permissions by programs. Understanding these concepts is key to building secure Solana applications.
