const { setup, validate, response } = require('../utils/setup');

const title = 'Climbing the Leaderboard';
const inputString = `7
100 100 50 40 40 20 10
4
5 25 50 120`;
const validateResult = `6
4
2
1`;

const binarySearch = (arrScores, findScore, start, end, ranks) => {
  // Find if the the score is between start and end
  if ((end - start) <= 1) {
    if (findScore > arrScores[start]) {
      // If score is greater than 'start' score
      return (ranks[arrScores[start]] - 1) > 0 ? ranks[arrScores[start]] - 1 : 1;
    } else if (findScore === arrScores[start]) {
      // If score is equal to ranking score return the rank
      return ranks[arrScores[start]];
    } else if (findScore > arrScores[end]) {
      // If score is greater than ranking score and not in the ranks
      return ranks[arrScores[start]] + 1;
    } else if (findScore === arrScores[end]) {
      //
      return ranks[arrScores[end]] === undefined ? ranks[arrScores[end - 1]] : ranks[arrScores[end]];
    } else {
      //
      return ranks[arrScores[end]] === undefined ? ranks[arrScores[end-1]] + 1 : ranks[arrScores[end]] + 1;
    }
  }

  // Find the middle index
  const mid =  Math.floor((start + end) / 2);

  // Compare mid with given key findScore
  if (arrScores[mid] === findScore) {
    return ranks[arrScores[mid]];
  }

  // If element at mid is greater than x, search in the left half of mid
  if (arrScores[mid] > findScore) {
    return binarySearch(arrScores, findScore, mid, end, ranks);
  }

  // If element at mid is smaller than x,
  // search in the right half of mid
  return binarySearch(arrScores, findScore, start, mid, ranks);
};

const climbingLeaderboard = (rankScores, playerScores) => {
  const ranks = [];
  const playerRanked = [];
  let rank = 1;
  ranks[rankScores[0]] = rank;
  for (let i = 1; i < rankScores.length; i += 1) {
    if (rankScores[i] !== rankScores[i - 1]) {
      rank += 1;
      ranks[rankScores[i]] = rank;
    }
  }

  for (let j = 0; j < playerScores.length; j += 1) {
    playerRanked.push(binarySearch(rankScores, playerScores[j], 0, rankScores.length - 1, ranks));
  }

  return playerRanked;
};

const main = () => {
  const inputArr = setup(inputString);
  const ranked = inputArr[1].split(' ')
    .map((item) => parseInt(item, 10));
  const player = inputArr[3].split(' ')
    .map((item) => parseInt(item, 10));

  const result = climbingLeaderboard(ranked, player);

  return validate(result.join('\n'), validateResult, inputString);
};

const mainClimbingLeaderboard = () => {
  response(title, main);
};

module.exports = {
  climbingLeaderboard,
  mainClimbingLeaderboard,
};
