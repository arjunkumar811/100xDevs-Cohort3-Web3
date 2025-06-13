// Assgnment #2
// What if I ask you that the input string should start with 100xdevs ? How would the code change?

const crypto = require('crypto');


const findHashWithPrefix = (prefix) => {
    let nonce = 0;
    while(true) {
        const input = `100xdev${nonce}`;  // 100xdev292491
        const hash = crypto.createHash('sha256').update(input).digest('hex');
        if(hash.startsWith(prefix)) {
            console.log(`Found input: ${input}`);  // 100xdev292491
            console.log(`Hash: ${hash}`);  // 000003934733afe2f306284964cab7484c626311ca31f6c8d009d805a7dcaddb
            break;
        }
        nonce++;
    }
}

const prefix = '00000';   
findHashWithPrefix(prefix);