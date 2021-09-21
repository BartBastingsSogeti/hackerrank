let currentLine = 0;
const inputString = `6
1 2 3 4 10 11`;
const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function simpleArraySum(arr) {
  return arr.reduce((prev, current) => prev + current);
}

function main() {
  const n = parseInt(readLine(), 10);
  console.log('simpleArraySum :: n ::', n);
  const arr = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  return simpleArraySum(arr);
}

function mainSimpleArraySum() {
  console.log('Simple Array Sum :: main :: invoked');
  const result = main();
  console.log('simpleArraySum :: main :: result ::', result);
  console.log('Simple Array Sum :: main :: end');
}

module.exports = {
  simpleArraySum,
  mainSimpleArraySum,
};
