const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').split('\r\n');
//console.log(input);

let left = [];
let right = [];

input.forEach(line => {
    const nums = line.split("   ");
    if (nums.length === 2) {
        left.push(+nums[0]);
        right.push(nums[1]);
    } else {
        console.log("Skipping invalid line:", line);
    }
});
//console.log(left);
//console.log(right);

let countMap = {};
right.forEach(num => {
    if (!countMap[num]) {
        countMap[num] = 0;
    }
    countMap[num]++;
});

let similarityScore = 0;
left.forEach(num => {
    const count = countMap[num] || 0;
    if(count !== 0) console.log(`Processing ${num}: count = ${count}, contribution = ${num * count}`);
    similarityScore += num * count;
});

console.log(`score: ${similarityScore}`);
