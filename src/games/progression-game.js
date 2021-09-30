export const task = 'What number is missing in the progression?';
export const question = [];
export const correctAnswer = [];

const progression = () => {
  for (let n = 0; n < 3; n += 1) {
    const index = Math.floor(Math.random() * 10);
    const result = [];
    let start = (Math.floor(Math.random() * 100) + 1);
    const step = (Math.floor(Math.random() * 5) + 1);
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
  return question;
};
progression();
