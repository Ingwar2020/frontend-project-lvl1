import readlineSync from 'readline-sync';
// import { userName } from './cli';
import introduction, { userName } from './cli.js';

introduction();

const ifNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;

  for (let i = 0; i < 3; i += 1) {
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = ifNumberEven(question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (score === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
