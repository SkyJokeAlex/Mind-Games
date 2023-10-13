import gameLoop from '../index.js';

const welcomePhrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gamePrime = () => {
  const question = Math.floor(Math.random() * 20);
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  let correctAnswer = '';
  if (isPrime(question) || question === 1 || question === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [correctAnswer, question];
};

export default gamePrime;

gameLoop(welcomePhrase, gamePrime);
