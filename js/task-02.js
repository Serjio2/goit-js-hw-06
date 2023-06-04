const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridientsEl = document.querySelector("#ingredients");

const createListEl = ingredients.map( (element) => {
  const itemIngredientsEl = document.createElement("li");
  itemIngredientsEl.textContent = element;
  itemIngredientsEl.classList.add("item");

  // console.log(itemIngredientsEl);
  return itemIngredientsEl;
})

listIngridientsEl.append(...createListEl);

// console.log(listIngridientsEl);

