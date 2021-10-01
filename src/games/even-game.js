import getRandom from '../random.js';
import game from '../index.js';

const ifNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = [];
  const correctAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    question.push(getRandom());
    correctAnswer.push(ifNumberEven(question[i]));
  }
  game(task, question, correctAnswer);
};
