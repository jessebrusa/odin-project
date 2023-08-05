const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const gameField = document.querySelector('.game')
const choiceContainer = document.querySelector('.choiceContainer')
const reset = document.querySelector('.reset')
const rps = ['rock', 'paper', 'scissors']

let playerScore = 0;
computerScore = 0;
gamesPlayed = 0


function getComputerChoice() {
    return Math.floor(Math.random() * (3 -0))
}


function compareMoves(playerValue, compValue) {
    if (compValue === playerValue) {
        return 'tie'
    }
    else if (compValue === 2 && playerValue === 0) {
        return 'player'
    }
    else if (playerValue === 2 && compValue === 0) {
        return 'computer'
    }
    else if (compValue > playerValue) {
        return 'computer'
    }
    else {
        return 'player'
    }
 }


 function seconds(seconds) {
    return seconds * 1000
 }


function replaceMovesWithScore(playerMove, compareWords, compMove) {
    setTimeout(() => {
        playerMove.remove()
        compareWords.remove()
        compMove.remove()
        
        const playerScoreDiv = document.createElement('div')
        playerScoreDiv.style.display = 'flex'
        playerScoreDiv.style.flexDirection = 'column'
        playerScoreDiv.style.justifyContent = 'center'
        playerScoreDiv.style.alignContent = 'center'
        gameField.append(playerScoreDiv)

        const playerScoreName = document.createElement('h2')
        playerScoreName.style.fontSize = '35px'
        playerScoreName.style.textDecoration = 'underline'
        playerScoreName.textContent = 'Player'
        playerScoreDiv.append(playerScoreName)

        const playerScoreNum = document.createElement('h3')
        playerScoreNum.style.fontSize = '28px'
        playerScoreNum.textContent = `${playerScore}`
        playerScoreDiv.append(playerScoreNum)


        const roundNum = document.createElement('div')
        roundNum.style.display = 'flex'
        roundNum.style.flexDirection = 'column'
        roundNum.style.justifyContent = 'center'
        roundNum.style.alignContent = 'center'
        gameField.append(roundNum)

        const roundNumName = document.createElement('h2')
        roundNumName.style.fontSize = '35px'
        roundNumName.style.textDecoration = 'underline'
        roundNumName.textContent = 'Round'
        roundNum.append(roundNumName)

        const roundNumValue = document.createElement('h3')
        roundNumValue.style.fontSize = '28px'
        roundNumValue.textContent = `${gamesPlayed}`
        roundNum.append(roundNumValue)


        const computerScoreDiv = document.createElement('div')
        computerScoreDiv.style.display = 'flex'
        computerScoreDiv.style.flexDirection = 'column'
        computerScoreDiv.style.justifyContent = 'center'
        computerScoreDiv.style.alignContent = 'center'
        gameField.append(computerScoreDiv)

        const computerScoreName = document.createElement('h2')
        computerScoreName.style.fontSize = '35px'
        computerScoreName.style.textDecoration = 'underline'
        computerScoreName.textContent = 'Computer'
        computerScoreDiv.append(computerScoreName)

        const computerScoreNum = document.createElement('h3')
        computerScoreNum.style.fontSize = '28px'
        computerScoreNum.textContent = `${computerScore}`
        computerScoreDiv.append(computerScoreNum)
    }, seconds(.7))
}


function resetButton() {
    location.reload()
}



function playerRock() {
    gameField.replaceChildren()

    let compValue = getComputerChoice()

    const playerMove = document.createElement('img')
    playerMove.src = './static/img/rock.png'
    playerMove.alt = 'picture of a rock'
    gameField.append(playerMove)

    let compareString = compareMoves(0, compValue)

    const compareWords = document.createElement('h2')
    compareWords.style.fontSize = '35px'
    if (compareString === 'tie') {
        outcome = compareWords.textContent = '==Tie=='
        playerScore += 1
        computerScore += 1
        gamesPlayed += 1
    }
    else if (compareString === 'player') {
        outcome = compareWords.textContent = '<== Player'
        playerScore += 1
        gamesPlayed += 1
    }
    else {
        outcome = compareWords.textContent = 'Computer ==>'
        computerScore += 1
        gamesPlayed += 1
    }
    gameField.append(compareWords)

    const compMove = document.createElement('img')
    compMove.src = `./static/img/${rps[compValue]}.png`
    compMove.alt = 'picture of computers choice'
    gameField.append(compMove)

    replaceMovesWithScore(playerMove, compareWords, compMove)

    if (gamesPlayed >= 5) {
        choiceContainer.replaceChildren()

        finalWriting = document.createElement('h2')
        if (playerScore > computerScore) {
            console.log(`\nPlayer Wins ${playerScore}/5`)
            finalWriting.textContent = `Player Wins ${playerScore}/5!\n You are the greatest marksman`
        }
        else if (computerScore > playerScore){
            console.log(`\nComputer Wins ${computerScore}/5`)
            finalWriting.textContent = `Computer Wins ${computerScore}/5.\n Better luck next time`
        }
        else {
            console.log("\nIt's A Tie!")
            finalWriting.textContent = "It's a tie. Try again"
        }
        choiceContainer.append(finalWriting)
    }
}


function playerPaper() {
    gameField.replaceChildren()

    let compValue = getComputerChoice()

    const playerMove = document.createElement('img')
    playerMove.src = './static/img/paper.png'
    playerMove.alt = 'picture of a piece of paper'
    gameField.append(playerMove)

    let compareString = compareMoves(1, compValue)

    const compareWords = document.createElement('h2')
    compareWords.style.fontSize = '35px'
    if (compareString === 'tie') {
        compareWords.textContent = '==Tie=='
        playerScore += 1
        computerScore += 1
        gamesPlayed += 1
    }
    else if (compareString === 'player') {
        compareWords.textContent = '<== Player'
        playerScore += 1
        gamesPlayed += 1
    }
    else {
        compareWords.textContent = 'Computer ==>'
        computerScore += 1
        gamesPlayed += 1
    }
    gameField.append(compareWords)

    const compMove = document.createElement('img')
    compMove.src = `./static/img/${rps[compValue]}.png`
    compMove.alt = 'picture of computers choice'
    gameField.append(compMove)

    replaceMovesWithScore(playerMove, compareWords, compMove)

    if (gamesPlayed >= 5) {
        choiceContainer.replaceChildren()

        finalWriting = document.createElement('h2')
        if (playerScore > computerScore) {
            console.log(`\nPlayer Wins ${playerScore}/5`)
            finalWriting.textContent = `Player Wins ${playerScore}/5!\n You are the greatest marksman`
        }
        else if (computerScore > playerScore){
            console.log(`\nComputer Wins ${computerScore}/5`)
            finalWriting.textContent = `Computer Wins ${computerScore}/5.\n Better luck next time`
        }
        else {
            console.log("\nIt's A Tie!")
            finalWriting.textContent = "It's a tie. Try again"
        }
        choiceContainer.append(finalWriting)
    }
}


function playerScissor() {
    gameField.replaceChildren()

    let compValue = getComputerChoice()

    const playerMove = document.createElement('img')
    playerMove.src = './static/img/scissors.png'
    playerMove.alt = 'picture of scissors'
    gameField.append(playerMove)

    let compareString = compareMoves(2, compValue)

    const compareWords = document.createElement('h2')
    compareWords.style.fontSize = '35px'
    if (compareString === 'tie') {
        compareWords.textContent = '==Tie=='
        playerScore += 1
        computerScore += 1
        gamesPlayed += 1
    }
    else if (compareString === 'player') {
        compareWords.textContent = '<== Player'
        playerScore += 1
        gamesPlayed += 1
    }
    else {
        compareWords.textContent = 'Computer ==>'
        computerScore += 1
        gamesPlayed += 1
    }
    gameField.append(compareWords)

    const compMove = document.createElement('img')
    compMove.src = `./static/img/${rps[compValue]}.png`
    compMove.alt = 'picture of computers choice'
    gameField.append(compMove)

    replaceMovesWithScore(playerMove, compareWords, compMove)

    if (gamesPlayed >= 5) {
        choiceContainer.replaceChildren()

        finalWriting = document.createElement('h2')
        if (playerScore > computerScore) {
            console.log(`\nPlayer Wins ${playerScore}/5`)
            finalWriting.textContent = `Player Wins ${playerScore}/5!\n You are the greatest marksman`
        }
        else if (computerScore > playerScore){
            console.log(`\nComputer Wins ${computerScore}/5`)
            finalWriting.textContent = `Computer Wins ${computerScore}/5.\n Better luck next time`
        }
        else {
            console.log("\nIt's A Tie!")
            finalWriting.textContent = "It's a tie. Try again"
        }
        choiceContainer.append(finalWriting)
    }
}


rock.addEventListener('click', playerRock)
paper.addEventListener('click', playerPaper)
scissors.addEventListener('click', playerScissor)
reset.addEventListener('click', resetButton)