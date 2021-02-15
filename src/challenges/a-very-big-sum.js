let currentLine = 0;
const inputString = `5
1000000001 1000000002 1000000003 1000000004 1000000005`;
const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b, 0);
}

function main() {
  const n = parseInt(readLine(), 10);
  console.log('aVeryBigSum :: n ::', n);
  const ar = readLine()
    .split(' ')
    .map((arTemp) => parseInt(arTemp, 10));
  console.log('aVeryBigSum :: ar ::', ar);

  return aVeryBigSum(ar);
}

function mainAVeryBigSum() {
  console.log('A Very Big Sum :: main :: invoked');
  const result = main();
  console.log('mainAVeryBigSum :: main :: result ::', result);
  console.log('A Very Big Sum :: main :: end');
}

module.exports = {
  aVeryBigSum,
  mainAVeryBigSum,
};
