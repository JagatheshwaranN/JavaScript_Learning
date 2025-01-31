// User Input

// Alert
// alert('This is an alert!');

// Confirm
// let choice = confirm("Ok === true \n Cancel === false");
// console.log(choice);

// Prompt
// let choice = prompt("Enter your name");
// if(choice) {
// console.log(choice ?? "You didn't enter.");
// } else {
//     console.log("You didn't enter.");
// }
// console.log(choice.trim().length);

// My Solution
let mychoice = confirm("Shall we play rock, paper & scissor ?");
if (mychoice) {
  let player = prompt("Please enter - rock / paper / scissor");
  const options = ["rock", "paper", "scissor"];
  let computer = options[Math.floor(Math.random() * 3)];
  let result =
    player === computer
      ? "Tie"
      : player === "rock" && computer === "paper"
      ? "computer wins!"
      : player === "scissor" && computer === "paper"
      ? "player wins!"
      : player === "rock" && computer === "scissor"
      ? "player wins!"
      : player === "paper" && computer === "scissor"
      ? "computer wins!"
      : player === "scissor" && computer === "rock"
      ? "computer wins!"
      : "player wins!";
  alert(result);
  let playAgain = confirm("Play Again?");
  playAgain ? location.reload() : alert('Okay, thanks for playing');
} else {
    alert("Okay! Thanks!");
}
