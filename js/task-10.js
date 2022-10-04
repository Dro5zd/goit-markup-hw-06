function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

let value = 0;

btnCreate.addEventListener('click', () => createBoxes(value));

btnDestroy.addEventListener('click', () => destroyBoxes(value));

const initValue = (event) => {
  value = event.currentTarget.value;
  event.currentTarget.reset()
};

// const nullValue = (event) => {
//   console.log(event.currentTarget);
//   event.currentTarget.reset();
//   console.log(event.currentTarget);
// };

input.addEventListener('input', initValue);

const createBoxes = (amount) => {
  const markup = [];
  let boxSize = 20;
  for (let i = 0; i < amount; i++) {
    boxSize += 10;
    const li = document.createElement('div');
    li.style.width = `${boxSize}px`;
    li.style.height = `${boxSize}px`;
    li.style.backgroundColor = getRandomHexColor();
    markup.push(li);
  }
  boxes.append(...markup);
  input.value = ''
  value=0;
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
  input.value = '';
  value=0;
};



