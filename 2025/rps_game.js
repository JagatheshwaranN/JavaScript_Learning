// Rock, Paper, and Scissor Game.

let playGame = confirm("Are you interested to play - rock, papper or scissors");
if(playGame){
    let playerChoice = prompt("Please enter - rock / paper / scissors");
    if(playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === 'rock' ||
            playerOne === 'paper' ||
            playerOne === 'scissors'
        ) {
            let computerChoice = Math.floor(Math.random() * 3) + 1;
            let computer = computerChoice === 1 
            ? 'rock' 
            : computerChoice === 2
            ? 'paper'
            : 'scissors';

            let result = 
            playerOne === computer
            ? "Game is Tie!"
            : playerOne === 'rock' && computer === 'paper'
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            :playerOne === 'paper' && computer === 'scissors'
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            :playerOne === 'scissors' && computer === 'rock'
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayer Wins!`;
            alert(result);
            let playAgain = confirm("Do you want to play again?");
            playAgain ? location.reload() : alert("Okay! thanks for playing.");
        }else{
            alert("You have entered wrong option!");
            location.reload();
        }
    } else {
        alert("I guess, you have changed your mind. May be next time!");
    }
} else {
    alert('Okay! No problem. May be next time!');
}