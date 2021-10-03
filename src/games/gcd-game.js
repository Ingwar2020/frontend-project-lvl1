import getRandom from '../random.js';
import game from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => ((b === 0) ? a : gcd(b, a % b));

const getQuestionAnswer = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};

export default () => game(task, getQuestionAnswer);
