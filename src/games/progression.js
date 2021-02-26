import runBrainGames from "../index.js";

import getRandomNumber from "../generateRandomNumber.js";

const gameRules = "What number is missing in the progression?";

const getProgression = (begining, interval, length) => {
  const progression = [];

  for (let i = 0; i <= length; i += 1) {
    progression.push(begining + i * interval);
  }

  return progression;
};

const makeGame = () => {
  const progressionBeginning = getRandomNumber(0, 100);
  const progressionInterval = getRandomNumber(0, 100);
  const progressionLength = 10;
  const progression = getProgression(
    progressionBeginning,
    progressionInterval,
    progressionLength
  );
  const askedNumIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(progression[askedNumIndex]); // Memorizing number to ask
  progression[askedNumIndex] = ".."; // Hide number to ask
  const question = progression.join(" ");

  return [question, correctAnswer];
};
const runBrainProgression = () => {
  runBrainGames(makeGame, gameRules);
};

export default runBrainProgression;
