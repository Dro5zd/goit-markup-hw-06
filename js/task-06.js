const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {
  if (textInput.value.length === Number(textInput.attributes[2].value)) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
});
