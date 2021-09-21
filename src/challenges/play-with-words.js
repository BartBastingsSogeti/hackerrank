// NOT SOLVED!

let currentLine = 0;
const inputString = 'abcb';
const inputArray = inputString.replace(/\s*$/, '')
  .split('\n')
  .map((str) => str.replace(/\s*$/, ''));

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function playWithWords(s) {
  const n = s.length;

  const cps = new Array(n);

  for (let i = 0; i < n; i += 1) {
    cps[i] = new Array(n);
    for (let j = 0; j < n; j += 1) {
      cps[i][j] = 0;
    }
  }

  // palindromic subsequence of length 1
  for (let i = 0; i < n; i += 1) {
    cps[i][i] = 1;
  }

  for (let l = 2; l <= n; l += 1) {
    for (let i = 0; i <= n - l; i += 1) {
      const k = l + i - 1;
      if (s[i] === s[k]) {
        cps[i][k] = cps[i][k - 1] + cps[i + 1][k] + 1;
      } else {
        cps[i][k] = cps[i][k - 1] + cps[i + 1][k] - cps[i + 1][k - 1];
      }
    }
  }

  return cps[0][n - 1];
}

function main() {
  const s = readLine();

  return playWithWords(s);
}

function mainPlayWithWords() {
  console.log('Play with words :: main :: invoked');
  const result = main();
  console.log('playWithWords :: main :: result ::', result);
  console.log('Play with words :: main :: end');
}

module.exports = {
  playWithWords,
  mainPlayWithWords,
};
