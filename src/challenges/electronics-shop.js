// Electronics Shop
let currentLine = 0;
const inputString = `5 1 1
4
5`;
const inputArray = inputString.split('\n');

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function electronicsShop(keyboards, drives, b) {
  const moneySpent = [];
  keyboards.forEach((keyboard) => {
    drives.forEach((drive) => {
      const result = keyboard + drive;
      if (result <= b) {
        moneySpent.push(result);
      }
    });
  });

  return moneySpent.length > 0 ? Math.max(...moneySpent) : -1;
}

function main() {
  const bnm = readLine().split(' ');
  const b = parseInt(bnm[0], 10);
  const n = parseInt(bnm[1], 10);
  console.log('electronicsShop :: n ::', n);
  const m = parseInt(bnm[2], 10);
  console.log('electronicsShop :: m ::', m);
  const keyboards = readLine().split(' ').map((keyboardsTemp) => parseInt(keyboardsTemp, 10));
  const drives = readLine().split(' ').map((drivesTemp) => parseInt(drivesTemp, 10));

  return electronicsShop(keyboards, drives, b);
}

function mainElectronicsShop() {
  console.log('Electronics Shop :: main :: invoked');
  const result = main();
  console.log('electronicsShop :: main :: result ::', result);
  console.log('Electronics Shop :: main :: end');
}

module.exports = {
  electronicsShop,
  mainElectronicsShop,
};
