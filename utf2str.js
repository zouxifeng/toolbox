#!/usr/bin/env node

var hexToDec = function(str) {
    str=str.replace(/\\/g,"%");
    return unescape(str);
}

console.log('Notice: You have to quote the string with double quote or single quote');
console.log('Decode: ' + hexToDec(process.argv[2]));
