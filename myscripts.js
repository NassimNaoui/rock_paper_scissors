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
        console.log(`Le choix de l'ordi est :  ${computerSelection}`),
        console.log(`You win ! ${playerSelection} beats ${computerSelection}`),
        win = true;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`Le choix de l'ordi est :  ${computerSelection}`),
        console.log(`You win ! ${playerSelection} beats ${computerSelection}`),
        win = true;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`Le choix de l'ordi est :  ${computerSelection}`),
        console.log(`You win ! ${playerSelection} beats ${computerSelection}`)
        win = true;
    } 
    else if (playerSelection === computerSelection) {
        console.log(`Le choix de l'ordi est :  ${computerSelection}`),
        console.log("It's a Draw !"),
        draw = true;
    }
    else {
        console.log(`Le choix de l'ordi est :  ${computerSelection}`),
        console.log(`You lose ! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() { 
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    for (let i = 0; i < 5 ; i++) {
            playRound(prompt(),getComputerChoice()); {
                if (win) {
                    playerScore += 1,
                    console.log(`Player Score : ${playerScore}, Computer Score ${computerScore}, Draw Score ${drawScore}`); 
                } else if (draw) {
                    drawScore += 1,
                    console.log(`Player Score : ${playerScore}, Computer Score ${computerScore}, Draw Score ${drawScore}`);
                } else {computerScore += 1,
                    console.log(`Player Score : ${playerScore}, Computer Score ${computerScore}, Draw Score ${drawScore}`);
            };
        }
    } if (playerScore > computerScore) {
        console.log("You won the game !")
    } else if (computerScore > playerScore) {
        console.log("You lose !")
    } else { console.log("Nobody won !")

    }
}

game()

