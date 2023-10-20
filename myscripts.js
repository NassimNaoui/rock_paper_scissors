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
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        win = true;
        return (`Le choix de l'ordi est : ${computerSelection}. You win ! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        win = true
        return (`Le choix de l'ordi est : ${computerSelection}. You win ! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        win = true
        return (`Le choix de l'ordi est : ${computerSelection}. You win ! ${playerSelection} beats ${computerSelection}`);
    } 
    else if (playerSelection === computerSelection) {
        draw = true
        return (`Le choix de l'ordi est : ${computerSelection}. It's a Draw !`);
    }
    else {
        return (`Le choix de l'ordi est : ${computerSelection}. You lose ! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() { 
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
            playRound(playerSelection,getComputerChoice()); {
                if (win) {
                    playerScore ++,
                    console.log(`Player Score : ${playerScore}, Computer Score : ${computerScore}, Draw Score : ${drawScore}`); 
                } else if (draw) {
                    drawScore ++,
                    console.log(`Player Score : ${playerScore}, Computer Score : ${computerScore}, Draw Score : ${drawScore}`);
                } else {computerScore ++,
                    console.log(`Player Score : ${playerScore}, Computer Score : ${computerScore}, Draw Score : ${drawScore}`);
            };
        }
    if (playerScore > computerScore) {
        console.log("You won the game !")
    } else if (computerScore > playerScore) {
        console.log("You lose !")
    } else { console.log("Nobody won !")

    }
}

const monBouton = document.querySelectorAll(".option");


monBouton.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        const playerSelection = bouton.textContent;
        const result = playRound(playerSelection, getComputerChoice());
        const container = document.querySelector('body');
        const content = document.createElement('div');
        content.classList.add('text');
        content.textContent = result;
        container.appendChild(content);
    }); 
})
