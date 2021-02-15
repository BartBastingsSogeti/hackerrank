let currentLine = 0;
const inputString = '07:05:45PM';
const inputArray = inputString.trim()
  .split('\n')
  .map((str) => str.trim());

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function timeConversion(s) {
  const regex = /AM|PM/i;
  const clockArr = s.replace(regex, '')
    .split(':');
  const hour = parseInt(clockArr[0], 10);
  const format = s.match(regex)[0];

  if (format === 'PM' && hour !== 12) {
    clockArr[0] = hour + 12;
  } else if (format === 'AM' && hour === 12) {
    clockArr[0] = '00';
  }
  return clockArr.join(':');
}

function main() {
  const s = readLine();
  return timeConversion(s);
}

function mainTimeConversion() {
  console.log('Time Conversion :: main :: invoked');
  const result = main();
  console.log('timeConversion :: main :: result ::', result);
  console.log('Time Conversion :: main :: end');
}

module.exports = {
  timeConversion,
  mainTimeConversion,
};
