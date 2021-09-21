let currentLine = 0;
const inputString = `6
1 3 2 6 1 2
6 3`;
const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i <= n; i += 1) {
    count += ar.slice(i + 1, ar.length)
      .filter((j) => (ar[i] + j) % k === 0).length;
  }
  return count;
}

function main() {
  const nTemp = parseInt(readLine(), 10);
  console.log('divisibleSumPairs :: nTemp ::', nTemp);

  const ar = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const firstMultipleInput = readLine()
    .split(' ');

  const n = parseInt(firstMultipleInput[0], 10);
  const k = parseInt(firstMultipleInput[1], 10);

  return divisibleSumPairs(n, k, ar);
}

function mainDivisibleSumPairs() {
  console.log('Divisible Sum Pairs :: main :: invoked');
  const result = main();
  console.log('divisibleSumPairs :: main :: result ::', result);
  console.log('Divisible Sum Pairs :: main :: end');
}

module.exports = {
  divisibleSumPairs,
  mainDivisibleSumPairs,
};
