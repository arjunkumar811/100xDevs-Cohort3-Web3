const crypto = require('crypto');

const input = "100xdev";
const hash = crypto.createHash('sha256').update(input).digest('hex');
console.log(hash);


const input1 = "Arjun";
const hash1 = crypto.createHash('sha256').update(input1).digest('hex');
console.log(hash1);