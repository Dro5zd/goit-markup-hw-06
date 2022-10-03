function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const chgClrBtn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.body;

chgClrBtn.addEventListener('click', () => {
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = span.textContent;
});
