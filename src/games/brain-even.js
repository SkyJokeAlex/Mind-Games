import gameLoop from '../index.js';

const welcomePhrase = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameEven = () => {
  const question = Math.floor(Math.random() * 20);
  let correctAnswer = '';
  if (question % 2 === 1) {
    correctAnswer = 'no';
  } else {
    correctAnswer = 'yes';
  }
  return [correctAnswer, question];
};

export default gameEven;

gameLoop(welcomePhrase, gameEven);
