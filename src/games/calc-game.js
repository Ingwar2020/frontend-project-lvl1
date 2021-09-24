export const task = 'What is the result of the expression?';
export const question = [];
export const correctAnswer = [];

const randomNum = () => Math.floor(Math.random() * 100);

const operators = ['+', '-', '*'];
const operator = () => operators[Math.floor(Math.random() * 3)];

const expression = () => `${randomNum()} ${operator()} ${randomNum()}`;

const solution = (str) => {
  const arr = str.split(' ');

  switch (arr[1]) {
    case '+':
      return arr[0] + arr[2];
    case '-':
      return arr[0] - arr[2];
    case '*':
      return arr[0] * arr[2];
    default:
      return null;
  }
};

for (let i = 0; i < 3; i += 1) {
  question.push(expression());
  correctAnswer.push(String(solution(question[i])));
}
