
const buttonsEl = document.querySelector("#counter");

const decrementBtnEl = buttonsEl.firstElementChild;

const incrementBtnEl = buttonsEl.lastElementChild;

const counterValue = document.querySelector("#value");
counterValue.value = 0;
// console.dir(counterValue.value)


decrementBtnEl.addEventListener("click", () => {
    counterValue.textContent = counterValue.value -= 1
    // console.log(counterValue.value)
});

incrementBtnEl.addEventListener("click", () => {
    counterValue.textContent = counterValue.value += 1
    // console.log(counterValue.value)
});
