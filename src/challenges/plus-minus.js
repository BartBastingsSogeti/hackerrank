let currentLine = 0;
const inputString = `6
-4 3 -9 0 4 1`;
const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function plusMinus(arr) {
  const total = arr.length;
  const positive = (arr.filter((value) => value > 0).length / total).toFixed(6);
  console.log('plusMinus :: positive ::', positive);
  const negative = (arr.filter((value) => value < 0).length / total).toFixed(6);
  console.log('plusMinus :: negative ::', negative);
  const zeros = (arr.filter((value) => value === 0).length / total).toFixed(6);
  console.log('plusMinus :: zeros ::', zeros);
  return [positive, negative, zeros].join('\n');
}

function main() {
  const n = parseInt(readLine(), 10);
  console.log('plusMinus :: n ::', n);
  const arr = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  return plusMinus(arr);
}

function mainPlusMinus() {
  console.log('Plus Minus :: main :: invoked');
  const result = main();
  console.log('plusMinus :: main :: result ::', result);
  console.log('Plus Minus :: main :: end');
}

module.exports = {
  plusMinus,
  mainPlusMinus,
};
