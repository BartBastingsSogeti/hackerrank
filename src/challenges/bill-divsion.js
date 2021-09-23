let currentLine = 0;
const inputString = `4 1
3 10 2 9
12`;
const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function billDivision(bill, k, b) {
  const a = bill
    .filter((item, index) => index !== k)
    .reduce((prev, current) => prev + current) / 2;

  if (b === a) {
    return 'Bon Appetit';
  }
  return b - a;
}

function main() {
  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
  const n = parseInt(firstMultipleInput[0], 10);
  console.log('billDivision :: n ::', n);

  const k = parseInt(firstMultipleInput[1], 10);

  const bill = readLine()
    .split(' ')
    .map((billTemp) => parseInt(billTemp, 10));

  const b = parseInt(readLine().trim(), 10);

  return billDivision(bill, k, b);
}

function mainBillDivision() {
  console.log('Bill Division :: main :: invoked');
  const result = main();
  console.log('billDivision :: main :: result ::', result);
  console.log('Bill Division :: main :: end');
}

module.exports = {
  billDivision,
  mainBillDivision,
};
