require('dotenv').config();
import express from 'express';
import { burnTokens, mintTokens, sendNativeTokens } from './mintTokens';

const app = express();

const HELIUS_RES = {  
     "nativeTransfers": [ { 
        "amount": 10000000,
         "fromUserAccount":"AwjyngKRgY68FiQ99ovfw43NLguqmgG5akRk8BrtDUah", "toUserAccount":"GLue9GG4hHPtq5NWyXhs6XZWriYNG4NRKfXYZac5WFKL" 
        } ] }


        const VAULT = "GLue9GG4hHPtq5NWyXhs6XZWriYNG4NRKfXYZac5WFKL"


app.post('/helius', async(req, res) => {
    const incommingTx = HELIUS_RES.nativeTransfers.find(x => x.toUserAccount === VAULT);

    if(!incommingTx) {
        res.json({
         message : "processed"
        })
        return
    }

    const fromAddress = incommingTx.fromUserAccount
    const toAddress = VAULT;
    const amount = incommingTx.amount;
    const type = "received_native_sol";

    if (type === "received_native_sol") {
        await mintTokens(fromAddress, toAddress, amount);
    } else {
        // What could go wrong here?
        await burnTokens(fromAddress, toAddress, amount);
        await sendNativeTokens(fromAddress, toAddress, amount);
    }

    res.send('Transaction successful');
});





app.listen(3000, () => {
  console.log('Server is running on port 3000');
});