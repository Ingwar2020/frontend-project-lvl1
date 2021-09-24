export const task = 'Find the greatest common divisor of given numbers.';
export const question = [];
export const correctAnswer = [];

const randomNum = () => (Math.floor(Math.random() * 100) + 1);
const arrOfQuestions = [];

const gcd = (a, b) => {
  if (b > a) return gcd(b, a);
  if (!b) return a;
  return gcd(b, a % b);
};

for (let i = 0; i < 3; i += 1) {
  arrOfQuestions.push([randomNum()]);
  arrOfQuestions[i].push(randomNum());
  question.push(arrOfQuestions[i].join(' '));
  correctAnswer.push(String(gcd(arrOfQuestions[i][0], arrOfQuestions[i][1])));
}
