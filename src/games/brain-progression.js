import gameLoop from '../index.js';

const welcomePhrase = 'What number is missing in the progression?';
const gameProgression = () => {
  const tempArray = [];
  const valueIncrease = Math.floor(Math.random() * 5);
  let startValue = Math.floor(Math.random() * 20);
  for (let i = 0; i < 10; i += 1) {
    tempArray.push(startValue);
    startValue += valueIncrease;
  }
  const random = Math.floor(Math.random() * tempArray.length);
  const correctAnswer = tempArray[random];
  tempArray[random] = '..';
  const question = tempArray.join(' ');
  return [correctAnswer, question];
};

export default gameProgression;

gameLoop(welcomePhrase, gameProgression);
