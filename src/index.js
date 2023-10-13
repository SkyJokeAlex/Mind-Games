import readlineSync from 'readline-sync';
import cli from './cli.js';

export default (welcomePhrase, gameName) => {
  const userName = cli();
  console.log(welcomePhrase);
  for (let i = 0; i < 3; i += 1) {
    const [correctAnswer, question] = gameName();
    const userAnswer = readlineSync.question(`Question: ${question}\n`);
    if (correctAnswer == userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
