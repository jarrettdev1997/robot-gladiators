// Game States (pseudocoding)
//"Win" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//console.log(enemyNames);
//console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//console.log(enemyNames[2]);
//console.log(enemyNames.length)

// function to start a new game
var startGame = function() {

  playerInfo.reset();

//reset player stats
//playerInfo.health = 100;
//playerInfo.attack = 10;
//playerInfo.money = 10;

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40, 60);

      fight(pickedEnemyObj);

      if (i < enemyInfo.length - 1) {
        shop();
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
endGame();
shop();
};


 // function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }

  if (playerInfo.health > 0 && i < enemyNames.length - 1) {
    // ask if player wants to use the store before next round
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
  
    // if yes, take them to the store() function
    if (storeConfirm) {
      shop();
    }
  }

var shop = function() {
  //ask a player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
      );
    
    // use switch to carry out action
switch (shopOptionPrompt) {
  case "REFILL":
  case "refill":
  playerInfo.refillHealth();
  break;

  case "UPGRADE":
  case "upgrade":
  playerInfo.upgradeAttack();
  break;

  case "LEAVE": // new case
  case "leave":
  window.alert("Leaving the store.");
  break;
  default:
  window.alert("You did not pick a valid option. Try again.");
  shop();
  break;
}

    };
  }
}

var fight = function(enemy) {
  // keep track of who goes first
  var isPlayerTurn = true;
​
  // randomly change turn order
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }
​
  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }
​
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
​
      // remove enemy's health by subtracting the amount we set in the damage variable
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.name +
          ". " +
          enemy.name +
          " now has " +
          enemy.health +
          " health remaining."
      );
​
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
​
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
​
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }
      // player gets attacked first
    } else {
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
​
      // remove player's health by subtracting the amount we set in the damage variable
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );
​
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  }
};

  //fxn to generate a random numeric value
  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
  }

  var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    }, // comma!
    refillHealth: function() {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    },
    upgradeAttack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
        }
      }
  }
  
  // You can also log multiple values at once like this
  //console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
  
  var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];

//Fxn calls
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemy.health = 50;
  fight(pickedEnemyName);
  }

shop();
startGame();