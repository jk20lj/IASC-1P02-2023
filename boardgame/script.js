var scenarios = ["Natural Disaster Strikes", "Potential Educational Opportunities", "Job Loss", "Access to healthy food", "Housing conditions", "Transportation Access", "Criminal Justice System", "Access to technology and information", "Environmental pollution", "Healthcare Access and Costs"];
var classes = ["Upper", "Middle", "Lower"];
var playerClass, botClass, playerHealth, botHealth;
var playerScore = 0, botScore = 0;
var victoryElement;

function selectClass(cls) {
 playerClass = cls;
 botClass = classes[Math.floor(Math.random()*classes.length)];
 playerHealth = 20;
 botHealth = 20;
 document.getElementById("playerStatus").innerHTML = "You are in the " + playerClass + " class. Your health is " + playerHealth + ".";
 document.getElementById("botStatus").innerHTML = "The bot is in the " + botClass + " class. The bot's health is " + botHealth + ".";
 document.getElementById("nextRound").disabled = false;
 if (victoryElement) {
 document.body.removeChild(victoryElement);
 victoryElement = null;
 }
}

function playRound() {
 if (playerHealth <= 0 || botHealth <= 0) return;
 var scenario = scenarios[Math.floor(Math.random()*scenarios.length)];
 var playerRoll = Math.floor(Math.random() * 6) + 1;
 var botRoll = Math.floor(Math.random() * 6) + 1;
 var playerOutcome = getOutcome(playerClass, playerRoll);
 var botOutcome = getOutcome(botClass, botRoll);
 document.getElementById("scenario").innerHTML = "The scenario is: " + scenario;
 document.getElementById("playerStatus").innerHTML = "You are in the " + playerClass + " class. You needed to roll a " + getClassRequirement(playerClass) + " to survive. You " + (playerOutcome ? "survived" : "did not survive") + " the scenario. Your health is " + playerHealth + ".";
 document.getElementById("botStatus").innerHTML = "The bot is in the " + botClass + " class. The bot needed to roll a " + getClassRequirement(botClass) + " to survive. The bot " + (botOutcome ? "survived" : "did not survive") + " the scenario. The bot's health is " + botHealth + ".";
 if (playerHealth <= 0 || botHealth <= 0) endGame();
}

function getOutcome(cls, roll) {
 var survived = false;
 var healthLoss;
 if (cls == "Upper") {
  survived = roll >= 2;
  healthLoss = 1;
 } else if (cls == "Middle") {
  survived = roll >= 3;
  healthLoss = 3;
 } else {
  survived = roll >= 5;
  healthLoss = 4;
 }
 if (!survived) {
  if (cls == playerClass) playerHealth -= healthLoss;
  else botHealth -= healthLoss;
 }
 return survived;
}

function getClassRequirement(cls) {
 if (cls == "Upper") return 2;
 else if (cls == "Middle") return 3;
 else return 5;
}

function endGame() {
 var victoryMessage;
 if (playerHealth <= 0) {
  document.getElementById("playerStatus").innerHTML += "<br/>You have lost!";
  botScore++;
  victoryMessage = "Bot Wins! Select a class to play again.";
 } else if (botHealth <= 0) {
  document.getElementById("playerStatus").innerHTML += "<br/>You have won!";
  playerScore++;
  victoryMessage = "Player Wins! Select a class to play again.";
 }
 document.getElementById("score").innerHTML = "Player: " + playerScore + " | Bot: " + botScore;
 document.getElementById("nextRound").disabled = true;
 victoryElement = document.createElement("p");
 victoryElement.style.fontSize = "30px";
 victoryElement.style.textAlign = "center";
 victoryElement.innerHTML = victoryMessage;
 document.body.appendChild(victoryElement);
}