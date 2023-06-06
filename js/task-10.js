function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controlsDivEl = document.querySelector("#controls");
const inputDivEl = controlsDivEl.firstElementChild;
const createBtnEl = inputDivEl.nextElementSibling;
const destroyBtnEl = controlsDivEl.lastElementChild;

const boxesDiv = document.querySelector("#boxes");


// console.log(controlsDivEl);
// console.log(inputDivEl.number);
// console.log(createBtnEl);
// console.log(destroyBtnEl);
// console.log(boxesDiv);

createBtnEl.addEventListener("click", () => {
  const numberDivs = document.createElement("div");
  inputDivEl.map((value) => numberDivs(value));
  numberDivs.style.width = "30px";
  numberDivs.style.height = "30px";
  numberDivs.style.backgroundColor = "red";

  console.log(inputDivEl.value);


  boxesDiv.insertAdjacentElement("beforeend", numberDivs);
  
  // console.log(inputDivEl.value);
  // console.log(numberDivs);
  console.log(boxesDiv)
} )

// console.log(document)



// function createBoxes(amount) {
//   console.log(inputDivEl);
// }