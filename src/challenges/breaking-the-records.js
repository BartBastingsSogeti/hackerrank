let currentLine = 0;
const inputString = `10
3 4 21 36 10 28 35 5 24 42`;
const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function breakingRecords(arr) {
  const n = arr.length;
  let highestScore = arr[0];
  let countHighestScore = 0;
  let lowestScore = arr[0];
  let countLowestScore = 0;

  for (let i = 1; i < n; i += 1) {
    if (arr[i] > highestScore) {
      highestScore = arr[i];
      countHighestScore += 1;
    }
    if (arr[i] < lowestScore) {
      lowestScore = arr[i];
      countLowestScore += 1;
    }
  }

  return [countHighestScore, countLowestScore];
}

function main() {
  const n = parseInt(readLine(), 10);
  console.log('breakingRecords :: n ::', n);
  const arr = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  return breakingRecords(arr);
}

function mainBreakingRecords() {
  console.log('Breaking the Records :: main :: invoked');
  const result = main();
  console.log('breakingRecords :: main :: result ::', result);
  console.log('Breaking the Records :: main :: end');
}

module.exports = {
  breakingRecords,
  mainBreakingRecords,
};
