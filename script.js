let choices = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;

function playerChoice(playerSelection) {
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
    }
};

function computerChoice() {
    let computerSelection = Math.floor(Math.random() * choices.length)
    if (computerSelection === 0) {
        console.log('Computer played Rock');
        return choices[0];
    } else if (computerSelection === 1) {
        console.log('Computer played Paper');
        return choices[1];
    } else {
        console.log('Computer played Scissors');
        return choices[2];
    }
};

// result nodes
const results = document.querySelector('#results');
const winner = document.createElement('h3');
function removeResults() {
    results.removeChild(winner);
}

function round(playerChoice, computerChoice) {
    switch (true) {
        case playerChoice === choices[0] && computerChoice === choices[2]:
        case playerChoice === choices[2] && computerChoice === choices[1]:
        case playerChoice === choices[1] && computerChoice === choices[0]:
            winner.textContent = 'You win this round';
            results.appendChild(winner);
            setTimeout(
                removeResults,
                1500
            );
            return playerWins++
        case computerChoice === choices[0] && playerChoice === choices[2]:
        case computerChoice === choices[2] && playerChoice === choices[1]:
        case computerChoice === choices[1] && playerChoice === choices[0]:
            winner.textContent = 'Computer wins this round';
            results.appendChild(winner);
            setTimeout(
                removeResults,
                1500
            );
            return computerWins++
        case computerChoice === playerChoice:
            winner.textContent = 'It\'s a tie';
            results.appendChild(winner);
            setTimeout(
                removeResults,
                1500
            );
            break
    }
};

function checkWinner(pw, cw, pc, cc) {
    if (pw === 5) {
        winner.textContent = 'You win the game!';
        results.appendChild(winner);
    } else if (cw === 5) {
        winner.textContent = 'Computer wins the game!'
        results.appendChild(winner);
    } else {
        round(pc, cc);
    }
};

// player win count node
const playerw = document.querySelector('#playerw');
const ppoints = document.createElement('p');

// computer win count node
const compw = document.querySelector('#compw');
const cpoints = document.createElement('p');

// playerChoice using buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        checkWinner(playerWins, computerWins, playerChoice(button.id), computerChoice());

        ppoints.textContent = playerWins;
        playerw.appendChild(ppoints);
        cpoints.textContent = computerWins;
        compw.appendChild(cpoints);
    });
});