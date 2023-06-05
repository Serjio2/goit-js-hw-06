function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorTextEl = document.querySelector(".color");;
const changeColorBtnEl = document.querySelector(".change-color");

// console.log(changeColorTextEl);
// console.log(changeColorBtnEl);

changeColorBtnEl.addEventListener("click", (event) => {event.   target.style.backgroundColor = getRandomHexColor();
  changeColorTextEl.textContent = event.target.style.backgroundColor;

// console.log(changeColorTextEl.textContent)
// console.log(event.target.style.backgroundColor)

} ) 