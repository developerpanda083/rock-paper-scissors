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