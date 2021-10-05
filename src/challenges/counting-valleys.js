// Counting Valleys
let currentLine = 0;
const inputString = `12
DDUUDDUDUUUD`;
const inputArray = inputString.split('\n');

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function countingValleys(steps, path) {
  const pathArr = path.split('');
  let countValleys = 0;

  pathArr.reduce((prev, current) => {
    let result = prev;

    if (current === 'U') {
      result += 1;
    } else {
      result -= 1;
    }

    if (prev === 0 && result === 1) {
      countValleys += 1;
    }
    return result;
  }, 1);

  return countValleys;
}

function main() {
  const steps = parseInt(readLine(), 10);
  const path = readLine();

  return countingValleys(steps, path);
}

function mainCountingValleys() {
  console.log('Counting Valleys :: main :: invoked');
  const result = main();
  console.log('countingValleys :: main :: result ::', result);
  console.log('Counting Valleys :: main :: end');
}

module.exports = {
  countingValleys,
  mainCountingValleys,
};
