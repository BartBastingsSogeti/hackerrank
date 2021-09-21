let currentLine = 0;
const inputString = `1
1918`;
const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function dayOfProgrammer(year) {
  // Julian calendar
  const daysInMonths = {
    jan: 31,
    feb: 28,
    mar: 31,
    apr: 30,
    may: 31,
    jun: 30,
    jul: 31,
    aug: 31,
    sep: 30,
  };

  // Julian calendar
  if (year < 1918) {
    if (year % 4 === 0) {
      daysInMonths.feb = 29;
    }
  }

  // Gregorian calendar
  if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      daysInMonths.feb = 29;
    }
  }

  if (year === 1918) {
    daysInMonths.feb = 15;
  }

  const date = Object.entries(daysInMonths).reduce((prev, current, index) => {
    if (prev < 256) {
      const amount = prev + current[1];
      if (amount > 256) {
        const day = 256 - prev;
        return `${day}.0${index + 1}.${year}`;
      }
      return amount;
    }
    return 0;
  }, 0);

  return date;
}

function main() {
  const n = parseInt(readLine(), 10);
  console.log('dayOfProgrammer :: n ::', n);
  const year = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  return dayOfProgrammer(year[0]);
}

function mainDayOfProgrammer() {
  console.log('Day of the Programmer :: main :: invoked');
  const result = main();
  console.log('dayOfProgrammer :: main :: result ::', result);
  console.log('Day of the Programmer :: main :: end');
}

module.exports = {
  dayOfProgrammer,
  mainDayOfProgrammer,
};
