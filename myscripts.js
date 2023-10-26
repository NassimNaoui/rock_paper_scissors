function getComputerChoice() {
    choice = Math.floor(Math.random() * 3)
    switch (choice) {
        case 1 : return 'paper';
        break;
        case 2 : return 'rock';
        break;
        default : return 'scissors';
    }
}


function playRound (playerSelection, computerSelection) {
    win = ''
    draw = ''
    lose = ''
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            win = true
            return (`The computer's selection is : ${computerSelection}. You win ! ${playerSelection} beats ${computerSelection}`);
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            win = true
            return (`The computer's selection is : ${computerSelection}. You win ! ${playerSelection} beats ${computerSelection}`);
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            win = true
            return (`The computer's selection is : ${computerSelection}. You win ! ${playerSelection} beats ${computerSelection}`);
        } 
        else if (playerSelection === computerSelection) {
            draw = true
            return (`The computer's selection is : ${computerSelection}. It's a Draw !`);
        }
        else { 
            lose = true
            return (`The computer's selection is : ${computerSelection}. You lose ! ${computerSelection} beats ${playerSelection}`);
        }
}

const monBouton = document.querySelectorAll(".option");
const container = document.getElementById('result');
const content = document.createElement('div');
const contentResult = document.createElement('div');

var playerScore = 0;
var computerScore = 0;
var drawScore = 0;

monBouton.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        const playerSelection = bouton.textContent;
        const result = playRound(playerSelection, getComputerChoice());
        if (win) {
            playerScore ++
            document.getElementById('player-score').textContent = playerScore
            content.classList.add('text');
            content.textContent = result;
            container.appendChild(content)
                if (playerScore === 5) {
                    contentResult.classList.add('text');
                    contentResult.textContent = 'You won the game !';
                    container.appendChild(contentResult)
                };
    } else if (lose) {
            computerScore ++
            document.getElementById('computer-score').textContent = computerScore
            content.classList.add('text');
            content.textContent = result;
            container.appendChild(content);
                if (computerScore === 5) {
                    contentResult.classList.add('text');
                    contentResult.textContent = 'You lose the game !';
                    container.appendChild(contentResult)
                };
    } else {
            content.classList.add('text');
            content.textContent = result;
            container.appendChild(content)
    }});
})



