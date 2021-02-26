import runBrainGames from '../index.js';

import getRandomNumber from '../generateRandomNumber.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';



const isEven = (num) => num % 2 === 0;

const makeGame  = () => {

    const question = getRandomNumber(0, 100);

    const correctAnswer = isEven(question) ? 'yes' : 'no';

     return [question, correctAnswer];
}
const runBrainEven = () => runBrainGames(makeGame, gameRules);

export default runBrainEven;



