const inputNameEl = document.querySelector('#name-input');

const spanNameEl = document.querySelector('#name-output');


inputNameEl.addEventListener('input', (event) => {
// console.log(event.target.value)
if (!event.target.value.trim()) {
    spanNameEl.textContent = "Anonymous";

    // console.log(event.target.value)
    return;
}

spanNameEl.textContent = event.target.value});

// console.log(inputNameEl.value);
// console.log(spanNameEl);

