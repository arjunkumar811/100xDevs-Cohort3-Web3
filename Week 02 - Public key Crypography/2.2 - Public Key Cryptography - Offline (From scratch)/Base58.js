/*Base58
It is similar to Base64 but uses a different set of characters to avoid visually similar characters and to make the encoded output more user-friendly
Base58 uses 58 different characters:
Uppercase letters: A-Z (excluding I and O)
Lowercase letters: a-z (excluding l)
Numbers: 1-9 (excluding 0)
+ , /
Encode  */
const bs58 = require('bs58');

function uint8ArrayToBase58(uint8Array) {
  return bs58.encode(uint8Array);
}

// Example usage:
const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String); // Output: Base58 encoded string

// Decode
const bs58 = require('bs58');

function base58ToUint8Array(base58String) {
  return bs58.decode(base58String);
}

// Example usage:
const base58 = base58String; // Use the previously encoded Base58 string
const byteArrayFromBase58 = base58ToUint8Array(base58);
console.log(byteArrayFromBase58); // Output: Uint8Array(5) [72, 101, 108, 10





/*Ascii vs UTF-8
ASCII uses a 7-bit encoding scheme.
UTF-8 uses 1 to 4 bytes to encode each character.
https://www.fileformat.info/info/charset/UTF-8/list.htm
*/ 