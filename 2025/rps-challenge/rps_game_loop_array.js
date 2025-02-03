// Rock, Paper, and Scissor Game.

const playGame = confirm("Are you interested to play - rock, papper or scissors");
if (playGame) {
  while (playGame) {
    const playerChoice = prompt("Please enter - rock / paper / scissors");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];
        const result =
          playerOne === computer
            ? "Game is Tie!"
            : playerOne === "rock" && computer === "paper"
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayer Wins!`;
        alert(result);
        playGame = confirm("Do you want to play again?");
        if (!playGame) {
          alert("Okay! thanks for playing.");
        }
        continue;
      } else {
        alert("You have entered wrong option!");
        continue;
      }
    } else {
      alert("I guess, you have changed your mind. May be next time!");
      break;
    }
  }
} else {
  alert("Okay! No problem. May be next time!");
}
