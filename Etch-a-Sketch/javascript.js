function numberSixteen() {
    const gridContainer = document.querySelector('.gridContainer')
    gridContainer.replaceChildren()

    for (let i = 0; i < 4; i++) {
        const gridRow = document.createElement('div')
        gridRow.className = 'gridRow'
        gridContainer.append(gridRow)
        for (let j = 0; j < 4; j++) {
            const grid = document.createElement('div')
            grid.className = 'grid'
            gridRow.append(grid)
        }
    }

    const grids = document.querySelectorAll('.grid')
    let isMouseDown = false

    grids.forEach(grid => {
        grid.addEventListener('mousedown', () => {
          isMouseDown = true
        })
      
        grid.addEventListener('mouseup', () => {
          isMouseDown = false
        })
      
        grid.addEventListener('mouseenter', changeRed)
      })
}


function numberThirtytwo() {
    const gridContainer = document.querySelector('.gridContainer')
    gridContainer.replaceChildren()

    for (let i = 0; i < 6; i++) {
        const gridRow = document.createElement('div')
        gridRow.className = 'gridRow'
        gridContainer.append(gridRow)
        for (let j = 0; j < 6; j++) {
            const grid = document.createElement('div')
            grid.className = 'grid'
            gridRow.append(grid)
        }
    }

    const grids = document.querySelectorAll('.grid')
    let isMouseDown = false

    grids.forEach(grid => {
        grid.addEventListener('mousedown', () => {
          isMouseDown = true
        })
      
        grid.addEventListener('mouseup', () => {
          isMouseDown = false
        })
      
        grid.addEventListener('mouseenter', changeRed)
      })
}


function numberSixtyfour() {
    const gridContainer = document.querySelector('.gridContainer')
    gridContainer.replaceChildren()

    for (let i = 0; i < 8; i++) {
        const gridRow = document.createElement('div')
        gridRow.className = 'gridRow'
        gridContainer.append(gridRow)
        for (let j = 0; j < 8; j++) {
            const grid = document.createElement('div')
            grid.className = 'grid'
            gridRow.append(grid)
        }
    }

    const grids = document.querySelectorAll('.grid')
    let isMouseDown = false

    grids.forEach(grid => {
        grid.addEventListener('mousedown', () => {
          isMouseDown = true
        })
      
        grid.addEventListener('mouseup', () => {
          isMouseDown = false
        })
      
        grid.addEventListener('mouseenter', changeRed)
      })
}

const body = document.body

const h1 = document.createElement('h1')
h1.textContent = 'Etch-a-Sketch'
body.append(h1)

const gridContainer = document.createElement('div')
gridContainer.className = 'gridContainer'
body.append(gridContainer)

let loopValue = prompt('How many rows & columns would you like?')
console.log(loopValue)

for (let i = 0; i < loopValue; i++) {
    const gridRow = document.createElement('div')
    gridRow.className = 'gridRow'
    gridContainer.append(gridRow)
    for (let j = 0; j < loopValue; j++) {
        const grid = document.createElement('div')
        grid.className = 'grid'
        gridRow.append(grid)
    }

    const grids = document.querySelectorAll('.grid')
    let isMouseDown = false

    grids.forEach(grid => {
        grid.addEventListener('mousedown', () => {
          isMouseDown = true
        })
      
        grid.addEventListener('mouseup', () => {
          isMouseDown = false
        })
      
        grid.addEventListener('mouseenter', changeRed)
      })
}

const buttonContainer = document.createElement('div')
buttonContainer.className = 'buttonContainer'
body.append(buttonContainer)


const sixteenButton = document.createElement('button')
sixteenButton.textContent = '4X4: 16'
sixteenButton.className = 'sixteen'
buttonContainer.append(sixteenButton)

const thirtytwoButton = document.createElement('button')
thirtytwoButton.textContent = '6X6: 36'
thirtytwoButton.className = 'thirtytwo'
buttonContainer.append(thirtytwoButton)

const sixtyfourButton = document.createElement('button')
sixtyfourButton.textContent = '8X8: 64'
sixtyfourButton.className = 'sixtyfour'
buttonContainer.append(sixtyfourButton)

let isMouseDown = false

function changeRed(event) {
    if (isMouseDown) {
        event.target.style.backgroundColor = 'red'
    }
}

document.addEventListener('mousedown', () => {
    isMouseDown = true
})

document.addEventListener('mouseup', () => {
    isMouseDown = false
})


const grids = document.querySelectorAll('.grid')
grids.forEach(grid => {
    grid.addEventListener('mouseenter', changeRed)
})


// const grids = document.querySelectorAll('.grid')
// let isMouseDown = false

// grids.forEach(grid => {
//     grid.addEventListener('mousedown', () => {
//       isMouseDown = true
//     })
  
//     grid.addEventListener('mouseup', () => {
//       isMouseDown = false
//     })
  
//     grid.addEventListener('mouseenter', changeRed)
//   })


sixteenButton.addEventListener('click', numberSixteen)
thirtytwoButton.addEventListener('click', numberThirtytwo)
sixtyfourButton.addEventListener('click', numberSixtyfour)

