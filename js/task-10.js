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

// const amount = inputDivEl.value;
// console.log(amount); 

createBtnEl.addEventListener("click", (event) => {
  
const amount = inputDivEl.value;

console.log(amount);

  // const numberDivs = document.createElement("div");
  // // inputDivEl.map((value) => numberDivs(value));
  // const divWidth = numberDivs.style.width = "30px";
  // const divHeight = numberDivs.style.height = "30px";
  // const divBackground = numberDivs.style.backgroundColor = getRandomHexColor();

  console.log(inputDivEl);

  for (let i = 0; i <= amount; i += 1) {
    const numberDivs = document.createElement("div");
    // inputDivEl.map((value) => numberDivs(value));
    const divWidth = numberDivs.style.width = "30px";
    const divHeight = numberDivs.style.height = "30px";
    const divBackground = numberDivs.style.backgroundColor = getRandomHexColor();
  }


  boxesDiv.insertAdjacentElement("beforeend", numberDivs);
  
  // console.log(inputDivEl.value);
  // console.log(numberDivs);
  // console.log(boxesDiv)
} )

// console.log(document)



// function createBoxes(amount) {
//   console.log(inputDivEl);
// }