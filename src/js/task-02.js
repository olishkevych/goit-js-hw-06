const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingrediendtsListEl = document.querySelector("#ingredients");

const makeIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add("item");
    return ingredientEl;
  });
};

const ingredientsList = makeIngredients(ingredients);
ingrediendtsListEl.append(...ingredientsList);
