import readlineSync from 'readline-sync';
import introduction, { userName } from './cli.js';

introduction();
const randomNum = () => Math.floor(Math.random() * 100);

const operators = ['+', '-', '*'];
const operator = () => operators[Math.floor(Math.random() * 3)];

const expression = () => `${randomNum()} ${operator()} ${randomNum()}`;

const solution = (str) => {
  const arr = str.split(' ');

  switch (arr[1]) {
    case '+':
      return Number(arr[0]) + Number(arr[2]);
    case '-':
      return Number(arr[0]) - Number(arr[2]);
    case '*':
      return Number(arr[0]) * Number(arr[2]);
    default:
      return null;
  }
};

export default () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const newExpression = expression();
    console.log(`Question: ${newExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = solution(newExpression);

    if (correctAnswer === +userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      // eslint-disable-next-line no-useless-return
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
