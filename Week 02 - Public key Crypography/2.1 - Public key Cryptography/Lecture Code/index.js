// What is the 11001010 converted to a decimals ?

/*
Answer
2^7: 1×27=1×128=128
2^6: 1×26=1×64=64
2^5: 0×25=0×32=0
2^4: 0×24=0×16=0
2^3: 1×23=1×8=8
2^2: 0×22=0×4=0
2^1: 1×21=1×2=2
2^0: 0×20=0×1=0
= 202 
*/



/*
Bit
const x = 0;
console.log(x);
*/


/*
Byte
const x = 202
console.log(x);
*/


// Array of bytes
const byteArray = [202, 244, 1, 23]
console.log(byteArray);


/*
Uint8Array
a better way to represent an array of bytes is to use a UInt8Array in js
*/

let bytes = new UInt8Array([0, 255, 127, 128]);
console.log(bytes)




/*
What do you think happens to the first element here? Does it throw an error?
*/
let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;
console.log(uint8Arr) // Uint8Array(4) [ 0, 44, 127, 128 ]

/*
soln: 300 % 256 = 44 (overflow), 256 + 44 => 300✅

*/