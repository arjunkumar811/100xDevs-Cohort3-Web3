const crypto = require('crypto');

const input = "100xdev";
const hash = crypto.createHash('sha256').update(input).digest('hex');
console.log(hash); // 50e063c2fb085caa362c97b985720e89b244163f1b8f5221701d92a035afbf6f
 

const input1 = "Arjun";
const hash1 = crypto.createHash('sha256').update(input1).digest('hex');
console.log(hash1); // 2bb0c46073ba8fe53d965ee993c2463398cb9df296f72524217d65696f9b265d