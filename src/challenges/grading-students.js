let currentLine = 0;
const inputString = `4
73
67
38
33`;
const inputArray = inputString.split('\n');

function readLine() {
  const line = currentLine;
  currentLine += 1;
  return inputArray[line];
}

function gradingStudents(grades) {
  return grades.map((grade) => {
    const roundUp = Math.ceil(grade / 5) * 5;
    if (grade < 38) {
      return grade;
    }
    if (roundUp - grade < 3) {
      return roundUp;
    }
    return grade;
  });
}

function main() {
  const gradesCount = parseInt(readLine().trim(), 10);

  const grades = [];

  for (let i = 0; i < gradesCount; i += 1) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  return gradingStudents(grades);
}

function mainGradingStudents() {
  console.log('Grading Students :: main :: invoked');
  const result = main();
  console.log('gradingStudents :: main :: result ::', result);
  console.log('Grading Students :: main :: end');
}

module.exports = {
  gradingStudents,
  mainGradingStudents,
};
