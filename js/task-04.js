const currentValue = document.querySelector('#value');
let counterValue = 0;

const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

const DecClickHandler = () => currentValue.textContent = `${counterValue -= 1}`;
const IncClickHandler = () => currentValue.textContent = `${counterValue += 1}`;

buttonDec.addEventListener('click', DecClickHandler);
buttonInc.addEventListener('click', IncClickHandler);