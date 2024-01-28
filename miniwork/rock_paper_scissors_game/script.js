// Object to store the total score, including player and system scores
const totalScore = {'playerScore': 0, 'systemScore': 0 }

// Function to get a random choice for the system (Rock, Paper, or Scissors)
const getSystemChoice = () => {
  // Array containing possible choices for the system
  let rps_choice = ['Rock', 'Paper', 'Scissors']
  
  // Generate a random index to pick a choice from the array
  const random_number = Math.floor(Math.random() * rps_choice.length)
  
  // Return the randomly chosen system's choice
  return rps_choice[random_number]
}

// Function to determine the result of a round based on player and system choices
function getResult(playerChoice, systemChoice) {
  // Initialize the score variable
  let score = 0;

  // Check if playerChoice and systemChoice are the same, indicating a draw
  if (playerChoice === systemChoice) {
    score = 0;
  }
  // Check for winning scenarios for the player
  else if (
    (playerChoice === 'Rock' && systemChoice === 'Scissors') ||
    (playerChoice === 'Paper' && systemChoice === 'Rock') ||
    (playerChoice === 'Scissors' && systemChoice === 'Paper')
  ) {
    // If the player wins, set the score to 1
    score = 1;
  }
  // If neither a draw nor a win, the player loses, set the score to -1
  else {
    score = -1;
  }

  // Return the calculated score
  return score;
}

// Function to display the result and update the UI
function showResult(playerScore, playerChoice, systemChoice) {
  // Get references to HTML elements for displaying scores and choices
  let playerScoreDiv = document.getElementById('player-score');
  let systemScoreDiv = document.getElementById('system-score');
  let choiceDiv = document.getElementById('choice');
  let resultDiv = document.getElementById('result');

  // Check the value of playerScore to determine the game result
  if (playerScore === 1) {
    // Display 'You Win!' if player wins
    resultDiv.innerText = 'You Win!';
  } else if (playerScore === -1) {
    // Display 'You Lose!' if player loses
    resultDiv.innerText = 'You Lose!';
  } else if (playerScore === 0) {
    // Display "It's a Draw!" if the game is a draw
    resultDiv.innerText = "It's a Draw!";
  }

  // Update the displayed scores for the player and system
  playerScoreDiv.innerText = `Your Score : ${totalScore['playerScore']}`;
  systemScoreDiv.innerText = `System Score : ${totalScore['systemScore']}`;

  // Display the choices made by the player and the system
  choiceDiv.innerHTML = `<p>&#129333; : ${playerChoice} vs &#128187; : ${systemChoice} </p>`;
}

// Function to handle button click for player's choice
function onClickRPSButton(playerChoice) {
  // Get the system's choice
  const systemChoice = getSystemChoice();

  // Calculate the scores for the player and the system
  const playerScore = getResult(playerChoice, systemChoice);
  const systemScore = getResult(systemChoice, playerChoice);

  // Update the total scores with the calculated scores
  totalScore['playerScore'] += playerScore;
  totalScore['systemScore'] += systemScore;

  // Display the result, scores, and choices in the UI
  showResult(playerScore, playerChoice, systemChoice);
}

// Function to set up event listeners and start the game
function playGame() {
  // Select all buttons with class 'rpsButton'
  let rpsButtons = document.querySelectorAll(".rpsButton");

  // Select the 'endGame' button
  let endButton = document.getElementById("endGame");

  // Attach a click event handler to each Rock, Paper, Scissors button
  rpsButtons.forEach(rpsButton => {
    // When a button is clicked, call the onClickRPSButton function with the button's value
    rpsButton.onclick = () => onClickRPSButton(rpsButton.value);
  });

  // Attach a click event handler to the 'endGame' button
  endButton.onclick = () => endGame(totalScore);
}

// Function to reset scores and UI elements when the game ends
function endGame(totalScore) {
  // Reset player and system scores to 0
  totalScore['playerScore'] = 0;
  totalScore['systemScore'] = 0;

  // Get references to HTML elements for displaying scores and choices
  let playerScoreDiv = document.getElementById('player-score');
  let systemScoreDiv = document.getElementById('system-score');
  let choiceDiv = document.getElementById('choice');
  let resultDiv = document.getElementById('result');

  // Clear the displayed scores and choices
  playerScoreDiv.innerText = '';
  systemScoreDiv.innerText = '';
  choiceDiv.innerText = '';
  resultDiv.innerText = '';
}

// Start the game when the script is loaded
playGame()