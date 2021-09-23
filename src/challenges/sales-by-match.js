// Sales by Match
let currentLine = 0;
const inputString = `9
10 20 20 10 10 30 50 10 20`;
const inputArray = inputString.split('\n');

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function salesByMatch(n, ar) {
  const socksPair = {};
  let amountOfPairs = 0;

  ar.forEach((sock) => {
    if (socksPair[sock]) {
      delete socksPair[sock];

      amountOfPairs += 1;
    } else {
      socksPair[sock] = 1;
    }
  });

  return amountOfPairs;
}

function main() {
  const n = parseInt(readLine(), 10);
  console.log('salesByMatch :: n ::', n);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  return salesByMatch(n, arr);
}

function mainSalesByMatch() {
  console.log('Sales by Match :: main :: invoked');
  const result = main();
  console.log('salesByMatch :: main :: result ::', result);
  console.log('Sales by Match :: main :: end');
}

module.exports = {
  salesByMatch,
  mainSalesByMatch,
};
