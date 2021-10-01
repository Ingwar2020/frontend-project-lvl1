import getRandom from '../random.js';
import game from '../index.js';

export default () => {
  const task = 'What is the result of the expression?';
  const question = [];
  const correctAnswer = [];
  const operators = ['+', '-', '*'];
  const operator = () => operators[getRandom(0, 2)];
  const expression = () => `${getRandom()} ${operator()} ${getRandom()}`;

  const solution = (str) => {
    const arr = str.split(' ');

    switch (arr[1]) {
      case '+':
        return +arr[0] + +arr[2];
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
  game(task, question, correctAnswer);
};
