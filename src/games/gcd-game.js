import getRandom from '../random.js';
import game from '../index.js';

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const question = [];
  const correctAnswer = [];
  const arrOfQuestions = [];

  const gcd = (a, b) => {
    if (b > a) return gcd(b, a);
    if (!b) return a;
    return gcd(b, a % b);
  };

  for (let i = 0; i < 3; i += 1) {
    arrOfQuestions.push([getRandom()]);
    arrOfQuestions[i].push(getRandom());
    question.push(arrOfQuestions[i].join(' '));
    correctAnswer.push(String(gcd(arrOfQuestions[i][0], arrOfQuestions[i][1])));
  }
  game(task, question, correctAnswer);
};
