import getRandom from '../random.js';
import game from '../index.js';

const task = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getQuestionAnswer = () => {
  const start = getRandom();
  const step = getRandom(2, 5);
  const length = getRandom(5, 10);
  const hiddenNumber = getRandom(0, length - 1);
  const progression = getProgression(start, step, length);
  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => game(task, getQuestionAnswer);
