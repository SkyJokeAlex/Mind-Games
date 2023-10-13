import gameLoop from '../index.js';

const welcomePhrase = 'Find the greatest common divisor of given numbers.';
const gameGcd = () => {
  const numberOne = Math.floor(Math.random() * 50);
  const numberTwo = Math.floor(Math.random() * 50);
  const question = `${numberOne} ${numberTwo}`;
  const gcd = (a, b) => {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };
  const correctAnswer = gcd(numberOne, numberTwo);
  return [correctAnswer, question];
};

export default gameGcd;

gameLoop(welcomePhrase, gameGcd);
