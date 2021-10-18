const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const createIngredient = document.createElement("li");
  createIngredient.textContent = ingredient;
  createIngredient.classList.add("item");
  return createIngredient;
});
listItems.append(...elements);
