// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

const crypto = require('crypto');


const findHashWithPrefix = (prefix) => {
    let nonce = 0;
    while(true) {
        const input = `Arjun${nonce}`;  // Arjun384176
        const hash = crypto.createHash('sha256').update(input).digest('hex');
        if(hash.startsWith(prefix)) {
            console.log(`Found input: ${input}`);  // Arjun384176
            console.log(`Hash: ${hash}`);  // 0000032c01e53ec9745e7ea0e7f598a8e820961f7931cf9fe387e50edd28461a
            break;
        }
        nonce++;
    }
}

const prefix = '00000';   
findHashWithPrefix(prefix);