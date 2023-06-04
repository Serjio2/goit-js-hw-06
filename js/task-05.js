const inputNameEl = document.querySelector('#name-input');

const spanNameEl = document.querySelector('#name-output');

spanNameEl.textContent = "Anonymous"

inputNameEl.addEventListener('input', (event) => {
// console.log(event.target.value)

spanNameEl.textContent = event.target.value.trim()});

// console.log(inputNameEl.value);
// console.log(spanNameEl);
