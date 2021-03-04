import runBrainGames from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';
const gameRules = 'What is the result of the expression?';

const calculateOperators = (num1, num2, operator) => {
    const error = 'Wrong expression operator!';
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return error;
  }
};

const makeGame = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculateOperators(num1, num2, operator));

  return [question, correctAnswer];
};

const runBrainCalc = () => runBrainGames(makeGame, gameRules);

export default runBrainCalc;