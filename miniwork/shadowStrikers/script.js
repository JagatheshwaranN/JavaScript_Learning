// Selecting elements from the DOM

// Play button
let playButton = document.getElementById('play'); 
// Result display area
let resultDiv = document.getElementById('result');
// Player 1 name display area
let p1NameDiv = document.getElementById('p1Name');
// Player 2 name display area
let p2NameDiv = document.getElementById('p2Name');
// Player 1 health display area 
let p1HealthDiv = document.getElementById('p1Health');
// Player 2 health display area
let p2HealthDiv = document.getElementById('p2Health');

// Function to update the game state and display player information
const updateGame = (p1, p2, gameState) => {
    // Update Player 1 name in the UI
    p1NameDiv.innerText = p1.name; 

    // Update Player 2 name in the UI
    p2NameDiv.innerText = p2.name; 

    // Update Player 1 health in the UI
    p1HealthDiv.innerText = p1.health;

    // Update Player 2 health in the UI
    p2HealthDiv.innerText = p2.health; 

    // Check if either player's health is less than or equal to 0
    if (p1.health <= 0 || p2.health <= 0) {
        // Set game over flag
        game.isOver = true;

        // Update game state
        gameState = game.isOver;

        // Display the winner or tie message
        resultDiv.innerText = game.declareWinner(game.isOver, p1, p2);

        // Return gamestate
        return gameState;
    }
}


// Player class
class Player {

// Constructor for a Player class
constructor(name, health, attackDamage) {
    // 'this' refers to the instance of the class being created
    // Assigning the provided 'name' parameter to the 'name' property of the instance
    this.name = name;
    
    // Assigning the provided 'health' parameter to the 'health' property of the instance
    this.health = health;
    
    // Assigning the provided 'attackDamage' parameter to the 'attackDamage' property of the instance
    this.attackDamage = attackDamage;
}

// Method for a Player to perform a strike (attack) on an enemy
strike(player, enemy, attackDamage) {
    // Calculate damage rate
    let damageRate = Math.ceil(Math.random() * attackDamage);
    
    // Update the enemy's health by deducting the calculated damage rate
    enemy.health -= damageRate;
    
    // Update the game state
    updateGame(p1, p2, game.isOver);
    
    // Log attack information to the console
    console.log(`${player.name} attacks ${enemy.name} and inflicts ${damageRate} damage`);
    
    // Return a string describing the attack
    return `${player.name} attacks ${enemy.name} and inflicts ${damageRate} damage`;
}

// Method for a Player to perform a heal action
heal(player) {
    // Calculate heal rate
    let healRate = Math.ceil(Math.random() * 5);
    
    // Increase the player's health by the calculated heal rate
    player.health += healRate;
    
    // Update the game state
    updateGame(p1, p2, game.isOver);
    
    // Log heal information to the console
    console.log(`${player.name} heals and gains ${healRate} health`);
    
    // Return a string describing the heal action
    return `${player.name} heals and gains ${healRate} health`;
}

}

// Game class
class Game {
    
    // Constructor for a Game class
constructor() {
    // 'this' refers to the instance of the class being created
    // Initialize the 'isOver' property to false when a new Game object is created
    this.isOver = false;
}

// Method to declare the winner of the game
declareWinner(isOver, p1, p2) {
    // Initialize the winMessage with a default tie message
    let winMessage = "It's a tie!";

    // Check if the game is over and Player 1's health is zero or less
    if (isOver && p1.health <= 0) {
        // If true, update winMessage with Player 2 as the winner
        winMessage = `${p2.name} wins!`;
    } 
    // Check if the game is over and Player 2's health is zero or less
    else if (isOver && p2.health <= 0) {
        // If true, update winMessage with Player 1 as the winner
        winMessage = `${p1.name} wins!`;
    }

    // Play victory sound using the 'victory' audio element
    document.getElementById('victory').play();

    // Return the final winMessage
    return winMessage;
}

// Method to reset the game state and player health
reset(p1, p2) {
    // Reset player1 health to 100
    p1.health = 100;

    // Reset player1 health to 100
    p2.health = 100;

    // Reset the game over flag to false
    this.isOver = false;

    // Clear the result display (assuming resultDiv is a DOM element)
    resultDiv.innerText = '';

    // Update the game state
    updateGame(p1, p2, this.isOver);
}

// Method to play the game
play(p1, p2) {
    // Reset the game state and player health
    this.reset(p1, p2);

    // Continue the game until it's over
    while (!this.isOver) {

        // Player 1 strikes Player 2
        p1.strike(p1, p2, p1.attackDamage);

        // Player 2 heals
        p2.heal(p2);

        // Player 2 strikes Player 1
        p2.strike(p2, p1, p2.attackDamage);

        // Player 1 heals
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

// Declare a variable gameState
let gameState;

// Assign a click event handler to the playButton element
playButton.onclick = () => {
    // Start the game by calling the play method with player instances p1 and p2
    // Update the content of the resultDiv element with the result of the game
    resultDiv.innerText = game.play(p1, p2);
}

// Event listener for 'q' key press, allowing Player 1 to strike
document.addEventListener('keydown', function(e) {
    // Check if the pressed key is 'Q', Player 2's health is greater than 0, and the game is not over
    if (e.key == 'q' && p2.health > 0 && !game.isOver) {
        // Player 1 strikes Player 2
        p1.strike(p1, p2, p1.attackDamage);
        
        // Play the attack sound associated with Player 1
        document.getElementById('p1Attack').play();
    }
})

// Event listener for 'a' key press, allowing Player 1 to heal
document.addEventListener('keydown', function(e) {
    // Check if the pressed key is 'A' and Player 2's health is greater than 0
    if (e.key == 'a' && p2.health > 0) {
        // Player 1 heals
        p1.heal(p1);
        
        // Play the healing sound associated with Player 1
        document.getElementById('p1Heal').play();
    }
})

// Event listener for 'p' key press, allowing Player 2 to strike
document.addEventListener('keydown', function(e) {
    // Check if the pressed key is 'P', Player 1's health is greater than 0, and the game is not over
    if (e.key == 'p' && p1.health > 0 && game.isOver == false) {
        // Player 2 strikes Player 1
        p2.strike(p2, p1, p2.attackDamage);
        
        // Play the attack sound associated with Player 2
        document.getElementById('p2Attack').play();
    }
})
  
// Event listener for 'l' key press, allowing Player 2 to heal
document.addEventListener('keydown', function(e) {
    // Check if the pressed key is 'L' and Player 1's health is greater than 0
    if (e.key == 'l' && p1.health > 0) {
        // Player 2 heals
        p2.heal(p2);
        
        // Play the healing sound associated with Player 2
        document.getElementById('p2Heal').play();
    }
})

  