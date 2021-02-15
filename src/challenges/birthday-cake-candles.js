let currentLine = 0;
const inputString = `4
3 2 1 3`;
const inputArray = inputString.split('\n');

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function birthdayCakeCandles(arr) {
  const tallest = Math.max(...arr);
  return arr.filter((value) => value === tallest).length;
}

function main() {
  const n = parseInt(readLine(), 10);
  console.log('birthdayCakeCandles :: n ::', n);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  return birthdayCakeCandles(arr);
}

function mainBirthdayCakeCandles() {
  console.log('Birthday Cake Candles :: main :: invoked');
  const result = main();
  console.log('birthdayCakeCandles :: main :: result ::', result);
  console.log('Birthday Cake Candles :: main :: end');
}

module.exports = {
  birthdayCakeCandles,
  mainBirthdayCakeCandles,
};
