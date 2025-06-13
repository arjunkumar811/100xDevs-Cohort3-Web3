// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

const crypto = require('crypto');


// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`); // 596138
console.log(`Hash: ${result.hash}`); // 00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab




/*
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
*/