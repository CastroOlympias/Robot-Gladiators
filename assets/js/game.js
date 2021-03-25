var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert Players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this batle? Enter 'FIGHT' or 'SKIP' to choose.")
    console.log(promptFight);

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // Subtract the value of the 'playerAttack' from the value of the 'enemeyHeath' and use that restult to update the value in the 'enemeyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;



    // Log a resulting message to the conosle so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " stil has " + enemyHealth + " Health left");
        }

        // Subtract the value of 'enemyAttack' from the value of the 'playerHealth' and use that result to update the value in the 'playerHealth' variable.

        // Log a resulting message to the consol so we know that it worked.

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resutling message to the consol so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //check to see if the value of the 'playerHealth' variable is greater than 0
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " Still has " + playerHealth + " health left.");
        }

        // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + " has chosen to skip the flight!");
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // sibtract money from the playMoney for skipping
                playerMoney = playerMoney - 2;
            }
            // if no (false), ask the question again by running fight() again
            else {
                fight();
            }

        } else {
            window.alert("You need to choose a valid option. Try again!");
        }    

        // put new code under this
        console.log(playerName + " attacked")
    
}

fight();