const body = document.querySelector('.body')
const container = document.querySelector('#container')


const h3 = document.createElement('h3')
h3.textContent = "I'm a blue h3!"
h3.style.color = 'blue'
container.appendChild(h3)


const content = document.createElement('div')
content.classList.add('content')
content.textContent = 'This is the glorious text-content!'
container.appendChild(content)


const pContent = document.createElement('p')
pContent.textContent = "Hey I'm red!"
pContent.style.color = 'red'
content.appendChild(pContent)


const card = document.createElement('div')
card.classList.add('card')
card.style.border = '2px solid black'
card.style.backgroundColor = 'pink'
content.appendChild(card)

const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"
card.appendChild(h1)

const cardP = document.createElement('p')
cardP.textContent = "ME TOO!"
card.appendChild(cardP)

const newElement = document.createElement('h4')
newElement.textContent = 'Hello World!'
body.appendChild(newElement)


const btn = document.querySelector('#btn')
// btn.onclick = () => alert('Hello World!')


const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', () => {
    alert('Hello World!!!!')
})

function alertFunction() {
    alert('Yay! You Did It!')
}

const btnFunction = document.querySelector('#btnFunction')
btnFunction.addEventListener('click', alertFunction)

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });