export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const question = [];
export const correctAnswer = [];

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};

for (let i = 0; i < 3; i += 1) {
  const randomNum = (Math.floor(Math.random() * 100) + 1);
  question.push(randomNum);
  if (isPrime(randomNum)) {
    correctAnswer.push('yes');
  } else {
    correctAnswer.push('no');
  }
}
