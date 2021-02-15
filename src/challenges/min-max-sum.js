let currentLine = 0;
const inputString = '1 2 3 4 5';
const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function miniMaxSum(arr) {
  const arrSum = arr.map((value, index, array) => {
    const arrTemp = [...array];
    arrTemp.splice(index, 1);
    return arrTemp.reduce((a, b) => a + b, 0);
  });

  return [Math.min(...arrSum), Math.max(...arrSum)].join('\x20');
}

function main() {
  const arr = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  return miniMaxSum(arr);
}

function mainMiniMaxSum() {
  console.log('Mini-Max Sum :: main :: invoked');
  const result = main();
  console.log('miniMaxSum :: main :: result ::', result);
  console.log('Mini-Max Sum :: main :: end');
}

module.exports = {
  miniMaxSum,
  mainMiniMaxSum,
};
