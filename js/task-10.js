function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDivEl = document.querySelector('#controls');
const inputDivEl = controlsDivEl.firstElementChild;
const createBtnEl = inputDivEl.nextElementSibling;
const destroyBtnEl = controlsDivEl.lastElementChild;

const boxesDiv = document.querySelector('#boxes');

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
 amount = inputDivEl.value;

  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const newBoxes = document.createElement('div')
    newBoxes.classList.add("box-element");
    newBoxes.style.width = size + "px";
    newBoxes.style.height = size + "px";
    newBoxes.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxesDiv.append(newBoxes);
  }
  // console.log(boxesDiv)
}

function destroyBoxes() {

  boxesDiv.innerHTML = "";
  // boxesDiv.remove(".box-element");
  // console.log(boxesDiv);
  }
 