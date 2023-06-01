const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridientsEl = document.querySelector("#ingredients");
// console.log(listIngridientsEl);

const itemIngredientsEl = document.createElement("li");

// for (const ingredient of ingredients) {

itemIngredientsEl.textContent = ingredients;
itemIngredientsEl.className = "item";
// };

// console.log(itemIngredientsEl)

listIngridientsEl.append(itemIngredientsEl);

console.log(listIngridientsEl);

