import getRandom from '../random.js';
import game from '../index.js';

const task = 'What is the result of the expression?';

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return +number1 + +number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const getQuestionAnswer = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const operators = ['+', '-', '*'];
  const operator = operators[getRandom(0, 2)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, operator, number2));
  return [question, correctAnswer];
};

export default () => game(task, getQuestionAnswer);
