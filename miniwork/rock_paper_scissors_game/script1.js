const total_score = {playerscore: 0, computerscore: 0}

const getComputerChoice = () => {
  let rps_choice = ['Rock', 'Paper', 'Scissors']
  const random_number = Math.floor(Math.random() * rps_choice.length)
  return rps_choice[random_number]
}

function getResult(playerChoice, computerChoice) {
  let score = 0
  if (playerChoice == computerChoice) {
    score = 0
  }
  else if (playerChoice = 'Rock' && computerChoice == 'Scissors' || playerChoice == 'Paper' && computerChoice == 'Rock' || playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  }
  else if (playerChoice = 'Rock' && computerChoice == 'Paper' || playerChoice == 'Paper' && computerChoice == 'Scissors' || playerChoice == 'Scissors' && computerChoice == 'Rock') {
    score = -1
  }

  return score
}

function showResult(score, playerChoice, computerChoice) {
  let playerScoreDiv = document.getElementById('player-score')
  let handsDiv = document.getElementById('hands')
  let resultDiv = document.getElementById('result')
  if (score == 1) {
    resultDiv.innerText = 'You Win!'
  } else if (score == -1) {
    resultDiv.innerText = 'You Lose!'
  } else if (score == 0) {
    resultDiv.innerText = "It's a Draw!"
  }
  playerScoreDiv.innerText = `Your Score : ${total_score['playerscore']}`
  handsDiv.innerText = `:person ${playerChoice} vs :robot${computerChoice}`

}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  total_score['playerscore'] += score
  showResult(score, playerChoice, computerChoice)
}

function playGame() {
  let rpsButtons = document.querySelectorAll(".rpsButton")
  let endButton = document.getElementById("endGame")
  rpsButtons.forEach(rpsBtn => {
    rpsBtn.onclick = () => onClickRPS(rpsBtn.value)
  })
  endButton.onclick = () => {
    endGame(total_score)
  }
}

function endGame(total_score) {
  total_score['playerscore'] = 0
  total_score['computerscore'] = 0
  let playerScoreDiv = document.getElementById('player-score')
  let handsDiv = document.getElementById('hands')
  let resultDiv = document.getElementById('result')
  playerScoreDiv.innerText = ''
  handsDiv.innerText = ''
  resultDiv.innerText = ''
}

playGame()