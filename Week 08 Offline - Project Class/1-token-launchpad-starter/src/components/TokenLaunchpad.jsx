import React from "react";
import { createInitializeMint2Instruction, getMinimumBalanceForRentExemptAccount, MINT_SIZE, TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Connection, Keypair, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";


export function TokenLaunchpad() {
    const { connection } = useConnection();
    const wallet = useWallet();

   async function CreateToken() {
   const mintAccount = Keypair.generate();
   const lamports = await getMinimumBalanceForRentExemptAccount(connection);

const transaction = new Transaction().add(
    SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: mintAccount.publicKey,
        space: MINT_SIZE,
        lamports,
        programId: TOKEN_2022_PROGRAM_ID
    }),
    createInitializeMint2Instruction(mintAccount.publicKey, 9, wallet.publicKey, wallet.publicKey, TOKEN_2022_PROGRAM_ID)
)
         transaction.feePayer = wallet.publicKey;
         transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
         transaction.partialSign(mintAccount);

         await wallet.sendTransaction(transaction, connection);
         console.log(`Token mint created at ${mintAccount.publicKey.toBase58()}`);

    }

   

    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input id="name" className='inputText' type='text' placeholder='Name'></input> <br />
        <input id="symbol" className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input id="image" className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input id="supply"  className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button onClick={CreateToken} className='btn'>Create a token</button>
    </div>
}


// import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
// import { useConnection, useWallet } from '@solana/wallet-adapter-react';
// import { MINT_SIZE, TOKEN_PROGRAM_ID, createInitializeMint2Instruction, createMint, getMinimumBalanceForRentExemptMint } from "@solana/spl-token"

// export function TokenLaunchpad() {
//     const { connection } = useConnection();
//     const wallet = useWallet();

//     async function createToken() {
//         const mintKeypair = Keypair.generate();
//         const lamports = await getMinimumBalanceForRentExemptMint(connection);

//         const transaction = new Transaction().add(
//             SystemProgram.createAccount({
//                 fromPubkey: wallet.publicKey,
//                 newAccountPubkey: mintKeypair.publicKey,
//                 space: MINT_SIZE,
//                 lamports,
//                 programId: TOKEN_PROGRAM_ID,
//             }),
//             createInitializeMint2Instruction(mintKeypair.publicKey, 9, wallet.publicKey, wallet.publicKey, TOKEN_PROGRAM_ID)
//         );
            
//         transaction.feePayer = wallet.publicKey;
//         transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
//         transaction.partialSign(mintKeypair);

//         await wallet.sendTransaction(transaction, connection);
//         console.log(`Token mint created at ${mintKeypair.publicKey.toBase58()}`);
//     }

//     return  <div style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column'
//     }}>
//         <h1>Solana Token Launchpad</h1>
//         <input className='inputText' type='text' placeholder='Name'></input> <br />
//         <input className='inputText' type='text' placeholder='Symbol'></input> <br />
//         <input className='inputText' type='text' placeholder='Image URL'></input> <br />
//         <input className='inputText' type='text' placeholder='Initial Supply'></input> <br />
//         <button onClick={createToken} className='btn'>Create a token</button>
//     </div>
// }