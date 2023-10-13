import gameLoop from '../index.js';

const welcomePhrase = 'What is the result of the expression?';
const gameCalc = () => {
  const numberOne = Math.floor(Math.random() * 20);
  const numberTwo = Math.floor(Math.random() * 20);
  const oper = ['+', '-', '*'];
  const operQuestion = oper[Math.floor(Math.random() * oper.length)];
  const question = `${numberOne} ${operQuestion} ${numberTwo}`;
  const correctAnswer = eval(question);
  return [correctAnswer, question];
};

export default gameCalc;

gameLoop(welcomePhrase, gameCalc);
