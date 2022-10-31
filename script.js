let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return (TargetNumber = Math.floor(Math.random() * 10));
};

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  const humanDiff = Math.abs(secretTarget - humanGuess);
  let computerDiff = Math.abs(secretTarget - computerGuess);
  return humanDiff <= computerDiff;
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
