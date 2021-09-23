import readlineSync from 'readline-sync';

export default (task, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(task);

  for (let round = 0; round < 3; round += 1) {
    console.log(`Question: ${question[round]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer[round]) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer[round]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
