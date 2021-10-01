import getRandom from '../random.js';
import game from '../index.js';

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = [];
  const correctAnswer = [];

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    } return true;
  };

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandom();
    question.push(randomNum);
    if (isPrime(randomNum)) {
      correctAnswer.push('yes');
    } else {
      correctAnswer.push('no');
    }
  }
  game(task, question, correctAnswer);
};
