// Rock, Paper, and Scissor Game.

const initGame = () => {
  const startGame = confirm(
    "Are you interested to play - rock, papper or scissors"
  );
  startGame ? playGame() : alert("Okay! No problem. May be next time!");
};

const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }

    const computerChoice = getComputerChoice();
    const result = checkWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

const getPlayerChoice = () => {
  return prompt("Please enter - rock / paper / scissors");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const decidedNotToPlay = () => {
  return alert("I guess, you have changed your mind. May be next time!");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

const invalidChoice = () => {
  return alert("You have entered wrong option!");
};

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[computerChoice];
};

const checkWinner = (player, computer) => {
  const winner =
    player === computer
      ? "Game is Tie!"
      : player === "rock" && computer === "paper"
      ? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`
      : player === "paper" && computer === "scissors"
      ? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`
      : player === "scissors" && computer === "rock"
      ? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`
      : `Player: ${player}\nComputer: ${computer}\nPlayer Wins!`;
  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Do you want to play again?");
};

const thanksForPlaying = () => {
  alert("Okay! thanks for playing.");
};

initGame();
