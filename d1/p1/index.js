const { readFileSync } = require("fs");

const input = readFileSync('./input.txt', 'utf8').trim().split("\r\n");
const parsedData = input
    .map(line => line.split("   "))
    .filter(data => data.length > 1); 
const r = parsedData.map(data => parseFloat(data[1]));
const l = parsedData.map(data => parseFloat(data[0]));
r.sort((a, b) => a - b);
l.sort((a, b) => a - b);
//console.log(l);
//console.log(r);
const total = r.reduce((sum, value, index) => sum + Math.abs(value - l[index]), 0);

console.log(total);

