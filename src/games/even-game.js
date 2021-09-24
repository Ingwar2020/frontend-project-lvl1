const ifNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const question = [];
export const correctAnswer = [];
for (let i = 0; i < 3; i += 1) {
  question.push(Math.floor(Math.random() * 100));
  correctAnswer.push(ifNumberEven(question[i]));
}
