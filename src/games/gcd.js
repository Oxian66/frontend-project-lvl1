import runBrainGames from '../index.js';

import getRandomNumber from '../generateRandomNumber.js';

const Rules= 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));



const makeGame = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};
  
  const runBrainGcd = () => {
    runBrainGames(makeGame, Rules);
  };
  
  export default runBrainGcd;