#!/usr/bin/env node

var ts = parseInt(process.argv[2]);
var d = new Date(ts * 1000);
console.log(d.toGMTString());
