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

// console.log(controlsDivEl);
console.log(inputDivEl);
// console.log(createBtnEl);
// console.log(destroyBtnEl);

// console.log(boxesDiv);

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
 amount = inputDivEl.value;

    let newBoxesEl = document.createElement('div');
    let boxWidth = newBoxesEl.style.width = '30px';
    let boxHeight = newBoxesEl.style.height = '30px';
    const boxColor = newBoxesEl.style.backgroundColor = getRandomHexColor();
  // console.log("Hi");

  for (let i = 0; i < amount; i += 1) {
    newBoxesEl = document.createElement('div');
    boxWidth += 10;
    // boxHeight += "10px";
    // boxColor = getRandomHexColor();
    console.log(boxWidth);

  }
  console.log(newBoxesEl)
  boxesDiv.append(newBoxesEl);

}

function destroyBoxes() {
  boxesDiv.remove();
  console.log(boxesDiv);
  }
