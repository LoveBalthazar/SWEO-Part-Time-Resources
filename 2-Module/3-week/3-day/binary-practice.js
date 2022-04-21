/*
Binary, number base practice

In this exercise, translate the following values into the
appropriate number base. Expect to use the following methods
and consult their documentation on how to utilize them:
    parseInt()
    Number.toString()
    String.fromCharCode()
    string.charCodeAt()
*/

/*
Base 10 to binary
*/
// function deciToBinary(n, res = []) {
// 	if (n === 0) return `0b${res.join("")}`;

// 	let digit = n % 2;
// 	if (digit === 0) {
// 	  res.unshift(digit);
// 	  return deciToBinary(n / 2, res);
// 	} else {
// 	  res.unshift(digit);
// 	  return deciToBinary((n - 1) / 2, res);
// 	}
// }

function deciToBinary(num) {
	// return `0b${num.toString(2)}`;
	let binary = (num >>> 0).toString(2);
    return `0b${binary}`;
}


console.log('Base 10 to binary:');
console.log(deciToBinary(8)); // '0b1000'
console.log(deciToBinary(24)); // '0b11000'
console.log(deciToBinary(255)); // '0b11111111'
console.log('');

/*
Base 10 to hexadecimal
*/
function deciToHexa(n) {
	return `0x${n.toString(16)}`;
}

console.log('Base 10 to hexadecimal:');
console.log(deciToHexa(8)); // '0x8'
console.log(deciToHexa(24)); // '0x18'
console.log(deciToHexa(255)); // '0xff'
console.log('');

/*
Binary to base 10
*/
function binaryToDeci(string) {
	return parseInt(string.substring(2), 2);
}

console.log('Binary to base 10:');
console.log(binaryToDeci('0b1010')); // 10
console.log(binaryToDeci('0b0011')); // 3
console.log('');

/*
Hexadecimal to base 10
*/
function hexaToDeci(string) {
	return parseInt(string);
}

console.log('Hexadecimal to base 10:');
console.log(hexaToDeci('0xa1')); // 161
console.log(hexaToDeci('0xff')); // 255
console.log('');

/*
Binary to hexadecimal
*/
function binaryToHexa(str) {
	str = str.substring(2)
	let num = parseInt(str, 2)
	return '0x' + num.toString(16)
}

// function binaryToHexa(b) {
//     return b.substring(2).match(/.{4}/g).reduce(function(acc, i) {
//         return acc + parseInt(i, 2).toString(16);
//     }, '0x')
// }

console.log('Binary to hexadecimal:');
console.log(binaryToHexa('0b1010')); // '0xa'
console.log(binaryToHexa('0b0011')); // '0x3'
console.log('');

/*
Hexadecimal to binary
*/
function hexaToBin(string) {
	return `0b${parseInt(string).toString(2)}`;
}

// function hexaToBin(h) {
//     return h.substring(2).split('').reduce(function(acc, i) {
// 			return acc + ('000' + parseInt(i, 16).toString(2)).substring(-4, 4);
// 	}, '0b')
// }

console.log('Hexadecimal to binary:');
console.log(hexaToBin('0xa1')); // '0b10100001'
console.log(hexaToBin('0xff')); // '0b11111111'
console.log('');


// // bonus

/*
Base 10 to ASCII
*/
function deciToAscii(num) {
	return String.fromCharCode(num);
}

console.log('Base 10 to ASCII:');
console.log(deciToAscii(65)); // 'A'
console.log(deciToAscii(66)); // 'B'
console.log(deciToAscii(97)); // 'a'
console.log(deciToAscii(98)); // 'b'
console.log('');

/*
Hexadecimal to ASCII
*/
function hexaToAscii(string) {
	// return String.fromCharCode(parseInt(string));
	return String.fromCharCode(string);
}

console.log('Hexadecimal to ASCII:');
console.log(hexaToAscii(`0x41`)); // 'A'
console.log(hexaToAscii(`0x42`)); // 'B'
console.log(hexaToAscii('0x61')); // 'a'
console.log(hexaToAscii('0x62')); // 'b'
console.log('');

/*
Binary to ASCII
*/
function binToAscii(bin) {
	num = bin.toString()
	return String.fromCharCode(num)
}

console.log('Binary to ASCII:');
console.log(binToAscii(0b01000001)); // 'A'
console.log(binToAscii(0b01000010)); // 'B'
console.log(binToAscii(0b01100001)); // 'a'
console.log(binToAscii(0b01100010)); // 'b'
console.log('');

/*
ASCII to decimal
*/
function asciiToDeci(blob) {
	return blob.charCodeAt(0)
}

console.log('ASCII to decimal:');
console.log(asciiToDeci('A')); // 65
console.log(asciiToDeci('B')); // 66
console.log(asciiToDeci('a')); // 97
console.log(asciiToDeci('b')); // 98
console.log(' ')

function asciiStrToDeci(str) {
	for(let i=0;i<str.length; i++){
		console.log(str.charCodeAt(i))
	}
}

asciiStrToDeci('abc'); // 97 98 99
