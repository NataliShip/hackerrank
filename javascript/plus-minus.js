// task: https://www.hackerrank.com/challenges/plus-minus/
// Plus Minus

'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  arr.map(item => {
    if (item > 0) {
      positive++;
    } else if (item < 0) {
      negative++;
    } else zero++;
  })
  let p = (positive / arr.length).toFixed(6);
  let n = (negative / arr.length).toFixed(6);
  let z = (zero / arr.length).toFixed(6);
  console.log(`${p}\n${n}\n${z}\n`);
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
