let currentLine = 0;
const inputString = `2 3
2 4
16 32 96`;

const inputArray = inputString.split('\n');

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

/**
 * see more on: https://en.wikipedia.org/wiki/Greatest_common_divisor
 */
function gcd(a, b) {
  let x = a;
  let y = b;

  while (x > 0 && y > 0) {
    if (x >= y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
}

/**
 * see more on: https://en.wikipedia.org/wiki/Least_common_multiple
 */
function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

function betweenTwoSets(a, b) {
  let multiple = 0;
  b.forEach((element) => {
    multiple = gcd(multiple, element);
  });

  let factor = 1;
  a.some((element) => {
    factor = lcm(factor, element);
    if (factor > multiple) {
      factor = 0;
      return true;
    }
    return false;
  });

  if (factor === 0) {
    return 0;
  }

  if (multiple % factor !== 0) {
    return 0;
  }

  const loopArray = [...Array(multiple - factor).keys()].map((i) => (factor - 1) + i + 1);
  const totalArr = loopArray.filter((i) => multiple % i === 0 && i % factor === 0);

  return totalArr.length + 1;
}

function main() {
  const firstMultipleInput = readLine()
    .replace(/\s+$/g, '')
    .split(' ');

  const n = parseInt(firstMultipleInput[0], 10);
  console.log('betweenTwoSets :: n :: ', n);
  const m = parseInt(firstMultipleInput[1], 10);
  console.log('betweenTwoSets :: m :: ', m);
  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));
  const brr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((brrTemp) => parseInt(brrTemp, 10));
  return betweenTwoSets(arr, brr);
}

function mainBetweenTwoSets() {
  console.log('Between Two Sets :: main :: invoked');
  const result = main();
  console.log('betweenTwoSets :: main :: result ::', result);
  console.log('Between Two Sets :: main :: end');
}

module.exports = {
  betweenTwoSets,
  mainBetweenTwoSets,
};
