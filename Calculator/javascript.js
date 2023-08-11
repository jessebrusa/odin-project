
let submitBtn = document.querySelector('.submitBtn')
let replaceBtn = document.querySelector('.replaceBtn')
let row1 = document.querySelector('.row1')


function getText() {
    inputText = document.getElementsByClassName('textField')[0].value
    console.log(inputText)
    return inputText
}

function replaceText () {
    let inputText = getText()
    console.log(`${inputText} and testing`)

    document.querySelector('.textField').value = 'testing'
  

}

submitBtn.addEventListener('click', getText)
replaceBtn.addEventListener('click', replaceText)
