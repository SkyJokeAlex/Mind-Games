import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    const questionNumber = Math.floor(Math.random() * 20);
    let tempAnswer = '';
    if (questionNumber % 2 === 1) {
      tempAnswer = 'no';
    }
    else {
      tempAnswer = 'yes';
    };
    const answer = readlineSync.question(`Question: ${questionNumber}\n`);
    if (answer === tempAnswer) {
      console.log('Correct!');
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${tempAnswer}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
