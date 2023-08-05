const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const gameField = document.querySelector('.game')
const rps = ['rock', 'paper', 'scissors']


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


function playerRock() {
    let compValue = getComputerChoice()

    const playerMove = document.createElement('img')
    playerMove.src = './static/img/rock.png'
    playerMove.alt = 'picture of a rock'
    gameField.append(playerMove)

    let compareString = compareMoves(0, compValue)

    const compareWords = document.createElement('h2')
    compareWords.style.fontSize = '35px'
    if (compareString === 'tie') {
        compareWords.textContent = '==Tie=='
    }
    else if (compareString === 'player') {
        compareWords.textContent = '<== Player'
    }
    else {
        compareWords.textContent = 'Computer ==>'
    }
    gameField.append(compareWords)

    const compMove = document.createElement('img')
    compMove.src = `./static/img/${rps[compValue]}.png`
    compMove.alt = 'picture of computers choice'
    gameField.append(compMove)


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
        playerScoreNum.textContent = 'filler value'
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
        roundNumValue.textContent = 'filler value'
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
        computerScoreNum.textContent = 'filler value'
        computerScoreDiv.append(computerScoreNum)



    }, seconds(2))
    
    

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