let currentLine = 0;
const inputString = `3
11 2 4
4 5 6
10 8 -12`;
const inputArray = inputString.split('\n');

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function diagonalDifference(arr) {
  const primaryDiagonal = arr
    .map((value, index) => value[index])
    .reduce((a, b) => a + b, 0);
  const secondaryDiagonal = arr
    .map((value, index, array) => value[array.length - (1 + index)])
    .reduce((a, b) => a + b, 0);

  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

function main() {
  const n = parseInt(readLine().trim(), 10);
  const arr = Array(n);

  for (let i = 0; i < n; i += 1) {
    arr[i] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  return diagonalDifference(arr);
}

function mainDiagonalDifference() {
  console.log('Diagonal Difference :: main :: invoked');
  const result = main();
  console.log('mainDiagonalDifference :: main :: result ::', result);
  console.log('Diagonal Difference :: main :: end');
}

module.exports = {
  diagonalDifference,
  mainDiagonalDifference,
};
