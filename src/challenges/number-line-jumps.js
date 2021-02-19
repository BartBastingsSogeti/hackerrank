let currentLine = 0;
const inputString = '0 3 4 2';

const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function numberLineJumps(x1, v1, x2, v2) {
  if ((x2 > x1 && v2 > v1) || (x1 > x2 && v1 > v2)) {
    return 'NO';
  }

  let y1 = x1;
  let y2 = x2;
  if (x2 > x1 && v2 < v1) {
    while (y2 > y1) {
      y1 += v1;
      y2 += v2;
    }
  } else {
    while (y1 > y2) {
      y1 += v1;
      y2 += v2;
    }
  }

  return y1 === y2 ? 'YES' : 'NO';
}

function main() {
  const x1V1X2V2 = readLine().split(' ');

  const x1 = parseInt(x1V1X2V2[0], 10);
  const v1 = parseInt(x1V1X2V2[1], 10);
  const x2 = parseInt(x1V1X2V2[2], 10);
  const v2 = parseInt(x1V1X2V2[3], 10);
  return numberLineJumps(x1, v1, x2, v2);
}

function mainNumberLineJumps() {
  console.log('Number Line Jumps :: main :: invoked');
  const result = main();
  console.log('numberLineJumps :: main :: result ::', result);
  console.log('Number Line Jumps :: main :: end');
}

module.exports = {
  numberLineJumps,
  mainNumberLineJumps,
};
