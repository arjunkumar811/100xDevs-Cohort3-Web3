/* Base64
1 character = 6 bits
Base64 encoding uses 64 different characters (A-Z, a-z, 0-9, +, /), which means each character can represent one of 64 possible values.

Encode  */
const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);  