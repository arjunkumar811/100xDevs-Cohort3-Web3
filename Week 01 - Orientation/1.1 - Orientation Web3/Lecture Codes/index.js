const crypto = require('crypto');

const input = "100xdev";
const hash = crypto.createHash('sha256').update(input).digest('hex');
console.log(hash);