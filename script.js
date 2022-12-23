let choices = ['rock','paper','scissors'];
let playerWins = 0;
let computerWins = 0;

function playerChoice() {
    let playerSelection =  prompt('Choose Rock, Paper or Scissors', '')
    playerSelection = playerSelection.toLowerCase('');

    if (playerSelection === choices[0]) {
        console.log('You played Rock');
        return choices[0];
    } else if (playerSelection === choices[1]) {
        console.log('You played Paper'); 
        return choices[1];
    } else if (playerSelection === choices[2]) {
        console.log('You played Scissors');
        return choices[2];
    } else {
        playerChoice();
    }};

function computerChoice() {
    let computerSelection = Math.floor(Math.random()*choices.length)
    if (computerSelection === 0) {
        console.log('Computer played Rock');
        return choices[0];
    } else if (computerSelection === 1) {
        console.log('Computer played Paper');
        return choices[1];
    } else {
        console.log('Computer played Scissors');
        return choices[2];
    }};

function round(playerChoice, computerChoice) {
    switch (true) {
        case playerChoice === choices[0] && computerChoice === choices[2]:
        case playerChoice === choices[2] && computerChoice === choices[1]:
        case playerChoice === choices[1] && computerChoice === choices[0]:
            console.log('You win');
            return playerWins++
        case computerChoice === choices[0] && playerChoice === choices[2]:
        case computerChoice === choices[2] && playerChoice === choices[1]:
        case computerChoice === choices[1] && playerChoice === choices[0]:
            console.log('Computer wins');
            return computerWins++
        case computerChoice === playerChoice:
            console.log('It\'s a tie!');
            break
        }};

while (playerWins < 5 && computerWins < 5) {
    round(playerChoice(), computerChoice());
    console.log(`You have ${playerWins} points and the computer has ${computerWins} points.`);
};

console.log(`Good game! Refresh to play again!`);