function getComputerChoice () {
    compNum = Math.floor(Math.random() * 60)
    if (compNum <= 20) {
        return 1;
        //return "Rock"
    }
    else if (compNum <= 40) {
        return 2;
        //return "Paper"
    }
    else {
        return 3;
        //return "Scissors"
    }
}

function playRound (playerChoice, compChoice) {
        if (playerChoice === 1 && compChoice === 2) {
            return 2;
            //return "You lose! Paper beats rock."
        }
        else if (playerChoice === 1 && compChoice === 3) {
            return 1;
            //return "You win! Rock beats scissors."
        }
        else if (playerChoice === 2 && compChoice === 1) {
            return 2;
            //return "You win! Paper beats rock."
        }
        else if (playerChoice === 2 && compChoice === 3) {
            return 3;
            //return "You lose! Scissors beats paper."
        }
        else if (playerChoice === 3 && compChoice === 1) {
            return 1;
            //return "You lose! Rock beats scissors."
        }
        else if (playerChoice === 3 && compChoice === 2) {
            return 3;
            //return "You win! Scissors beats paper."
        }
        else {
            return 4;
            //return "You tied!"
        }
    
}

