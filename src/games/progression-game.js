import getRandom from '../random.js';
import game from '../index.js';

export default () => {
  const task = 'What number is missing in the progression?';
  const question = [];
  const correctAnswer = [];

  for (let n = 0; n < 3; n += 1) {
    const index = getRandom(0, 9);
    const result = [];
    let start = getRandom();
    const step = getRandom(2, 5);
    for (let i = 0; i < 10; i += 1) {
      result.push(start);
      start += step;
      if (i === index) {
        correctAnswer.push(String(result[i]));
        result[i] = '..';
      }
    }
    question.push(result);
  }
  game(task, question, correctAnswer);
};
