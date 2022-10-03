function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls input')
const boxes = document.querySelector('#boxes')
const btnCreate = document.querySelector('button[data-create]')

let value = 0

input.addEventListener('input', (event)=>{
  value = event.currentTarget.value
  event.currentTarget.reset();
})

btnCreate.addEventListener('click', ()=>{
  createBoxes(value)
})


const createBoxes = (amount) => {
  const result = []
for (let i = 0; i < amount; i++) {
  const li = document.createElement('div')
  li.style.width = '30px'
  li.style.height = '30px'
  li.style.backgroundColor = getRandomHexColor()
  result.push(li)
}
boxes.append(...result)
}



