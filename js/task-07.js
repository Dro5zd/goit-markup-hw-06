const textSizeInput = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');

textSizeInput.addEventListener('input', (event) => {
    outputText.style.fontSize = `${event.currentTarget.value}px`;
  }
);