import getRandom from '../random.js';
import game from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getQuestionAnswer = () => {
  const question = getRandom();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => game(task, getQuestionAnswer);
