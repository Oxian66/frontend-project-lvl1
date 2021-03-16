import readlineSync from 'readline-sync';

const runBrainGames = (runGame, gameRules) => {
  console.log('Welcome to the Brain games!');

  const playerName = readlineSync.question('May I have your name?');

  console.log(`Hello  ${playerName}!`);
  console.log(gameRules);

  let correctAnswersCount = 0;

  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const [question, correctAnswer] = runGame();

    console.log(`Question: ${question}`);
    const playersAnswer = readlineSync.question('Your answer is: ');

    if (playersAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`"${playersAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
        Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default runBrainGames;
