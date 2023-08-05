const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

function getComputerChoice() {
    return Math.floor(Math.random() * (3 -0))
}

function compareMoves(playerValue, compValue) {
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

function playerRock() {
    let compValue = getComputerChoice()
    console.log(compareMoves(0, compValue))
}

function playerPaper() {
    let compValue = getComputerChoice()
    console.log(compareMoves(1, compValue))
}

function playerScissor() {
    let compValue = getComputerChoice()
    console.log(compareMoves(2, compValue))
}

rock.addEventListener('click', playerRock)
paper.addEventListener('click', playerPaper)
scissors.addEventListener('click', playerScissor)