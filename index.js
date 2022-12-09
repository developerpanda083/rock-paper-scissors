function getComputerChoice () {
    compNum = Math.floor(Math.random() * 60)
    if (compNum <= 20) {
        return "Rock"
    }
    else if (compNum <= 40) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function playRound (playerChoice, compChoice) {
        if (playerChoice === '1' && compChoice === "Paper") {
            return "You lose! Paper beats rock."
        }
        else if (playerChoice === '1' && compChoice === "Scissors") {
            return "You win! Rock beats scissors."
        }
        else if (playerChoice === '2' && compChoice === "Rock") {
            return "You win! Paper beats rock."
        }
        else if (playerChoice === '2' && compChoice === "Scissors") {
            return "You lose! Scissors beats paper."
        }
        else if (playerChoice === '3' && compChoice === "Rock") {
            return "You lose! Rock beats scissors."
        }
        else if (playerChoice === '3' && compChoice === "Paper") {
            return "You win! Scissors beats paper."
        }
        else {
            return "You tied!"
        }
    
}

function game(userChoice, compChoice) {
    for (let i = 0; i < 5; i++) {
        playRound(userChoice, compChoice);
    }
}