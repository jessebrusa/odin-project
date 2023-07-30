const rpc = ['rock', 'paper', 'scissors']


function getPlayerChoice() {
    return prompt('Please Type Rock, Paper, Or Scissors: ').toLowerCase()
}


function getComputerChoice() {
    return rpc[Math.floor(Math.random() * (3 -0))]
}


function returnNumValues(string) {
    if (string == 'rock') {
        return 0
    }
    else if (string == 'paper') {
        return 1
    }
    else {
        return 2
    }
}


function compareMoves(playerMove, computerMove) {
    let playerValue = returnNumValues(playerMove)
    compValue = returnNumValues(computerMove)

    console.log(`Player Move: ${playerMove}`)
    console.log(`Computer Move: ${computerMove}`)

    if (compValue === playerValue) {
        return 'Its a Tie!'
    }
    else if (compValue === 2 && playerValue === 0) {
        return 'Player Wins!'
    }
    else if (playerValue === 2 && compValue === 0) {
        return 'Computer Wins'
    }
    else if (compValue > playerValue) {
        return 'Computer Wins'
    }
    else {
        return 'Player Wins!'
    }
 }


let playerScore = 0;
computerScore = 0;
gamesPlayed = 0

while (gamesPlayed < 5) {

    let playerMove = getPlayerChoice()
    let computerMove = getComputerChoice()

    let outcome = compareMoves(playerMove, computerMove)
    console.log(outcome)

    if (outcome === 'Player Wins!') {
        playerScore += 1
        gamesPlayed += 1
    }
    else if (outcome == 'Computer Wins') {
        computerScore += 1
        gamesPlayed += 1
    }
    else {
        playerScore += 1
        computerScore += 1
        gamesPlayed += 1
    }
}


if (playerScore > computerScore) {
    console.log(`\nPlayer Wins ${playerScore}/5`)
}
else if (computerScore > playerScore){
    console.log(`\nComputer Wins ${computerScore}/5`)
}
else {
    console.log("\nIt's A Tie!")
}