//task: https://www.hackerrank.com/challenges/utopian-tree/
// Utopian Tree

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the utopianTree function below.
function utopianTree(n) {
  let h = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      h = h * 2;
    } else if (i % 2 !== 0) {
      h = h + 1;
    }
  }
  return h;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    let result = utopianTree(n);

    ws.write(result + "\n");
  }

  ws.end();
}
