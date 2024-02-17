// Selecting elements from the DOM
let playButton = document.getElementById('play'); // Play button
let resultDiv = document.getElementById('result'); // Result display area
let p1NameDiv = document.getElementById('p1Name'); // Player 1 name display area
let p2NameDiv = document.getElementById('p2Name'); // Player 2 name display area
let p1HealthDiv = document.getElementById('p1Health'); // Player 1 health display area
let p2HealthDiv = document.getElementById('p2Health'); // Player 2 health display area

// Function to update the game state
const updateGame = (p1, p2, gameState) => {
    // Update player information in the UI
    p1NameDiv.innerText = p1.name;
    p2NameDiv.innerText = p2.name;
    p1HealthDiv.innerText = p1.health;
    p2HealthDiv.innerText = p2.health;

    // Check if either player's health is less than or equal to 0
    if (p1.health <= 0 || p2.health <= 0) {
        // Set game over flag
        game.isOver = true;
        // Update game state
        gameState = game.isOver;
        // Display the winner or tie message
        resultDiv.innerText = game.declareWinner(game.isOver, p1, p2);
        return gameState;
    }
};

// Player class
class Player {
    constructor(name, health, attackDamage) {
        this.name = name;
        this.health = health;
        this.attackDmg = attackDamage;
    }

    // Method for player to attack
    strike(player, enemy, attackDmg) {
        // Calculate damage rate
        let damageRate = Math.ceil(Math.random() * attackDmg);
        // Update enemy's health
        enemy.health -= damageRate;
        // Update game state
        updateGame(p1, p2, game.isOver);
        // Log attack information
        console.log(`${player.name} attacks ${enemy.name} and inflicts ${damageRate} damage`);
        return `${player.name} attacks ${enemy.name} and inflicts ${damageRate} damage`;
    }

    // Method for player to heal
    heal(player) {
        // Calculate heal rate
        let healRate = Math.ceil(Math.random() * 5);
        // Increase player's health
        player.health += healRate;
        // Update game state
        updateGame(p1, p2, game.isOver);
        // Log heal information
        console.log(`${player.name} heals and gains ${healRate} health`);
        return `${player.name} heals and gains ${healRate} health`;
    }
}

// Game class
class Game {
    constructor() {
        this.isOver = false;
    }

    // Method to declare the winner
    declareWinner(isOver, p1, p2) {
        let winMessage = "It's a tie!";
        if (isOver && p1.health <= 0) {
            winMessage = `${p2.name} wins!`;
        } else if (isOver && p2.health <= 0) {
            winMessage = `${p1.name} wins!`;
        }
        // Play victory sound
        document.getElementById('victory').play();
        return winMessage;
    }

    // Method to reset the game
    reset(p1, p2) {
        // Reset player health and game over flag
        p1.health = 100;
        p2.health = 100;
        this.isOver = false;
        // Clear result display
        resultDiv.innerText = '';
        // Update game state
        updateGame(p1, p2, this.isOver);
    }

    // Method to play the game
    play(p1, p2) {
        // Reset the game
        this.reset(p1, p2);
        // Continue game until it's over
        while (!this.isOver) {
            p1.strike(p1, p2, p1.attackDmg);
            p2.heal(p2);
            p2.strike(p2, p1, p2.attackDmg);
            p1.heal(p1);
        }
        // Declare the winner and return the result
        return this.declareWinner(this.isOver, p1, p2);
    }
}

// Create player objects
let player1 = new Player('Paul', 100, 10);
let player2 = new Player('Kane', 100, 10);

// Assign players to variables
let p1 = player1;
let p2 = player2;

// Create game object
let game = new Game();

// Update game state in the UI
updateGame(p1, p2, game.isOver);

let gameState;

// Event listener for play button click
playButton.onclick = () => {
    // Start the game and display the result
    resultDiv.innerText = game.play(p1, p2);
};

// Event listener for 'p' key press, allowing Player 1 to strike
document.addEventListener('keydown', function(e) {
    if (e.key == 'q' && p2.health > 0 && !game.isOver) {
        p1.strike(p1, p2, p1.attackDmg); // Player 1 strikes
        document.getElementById('p1Attack').play(); // Play attack sound
    }
});

// Event listener for 'a' key press, allowing Player 1 to heal
document.addEventListener('keydown', function(e) {
    if (e.key == 'a' && p2.health > 0) {
      p1.heal(p1); // Player 1 heals
      document.getElementById('p1Heal').play(); // Play healing sound
    }
  });
  
  // Event listener for 'p' key press, allowing Player 2 to strike
  document.addEventListener('keydown', function(e) {
    if (e.key == 'p' && p1.health > 0 && game.isOver == false) {
      p2.strike(p2, p1, p2.attackDmg); // Player 2 strikes
      document.getElementById('p2Attack').play(); // Play attack sound
    }
  });
  
  // Event listener for 'l' key press, allowing Player 2 to heal
  document.addEventListener('keydown', function(e) {
      if (e.key == 'l' && p1.health > 0) {
          p2.heal(p2); // Player 2 heals
          document.getElementById('p2Heal').play(); // Play healing sound
      }
  });
  