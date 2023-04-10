function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const createdDivs = [];
//не змінюю початковий розмір на 30х30, оскільки вже на першому виконанні циклу до сторони додається +10
let initialSize = 20;

function createBoxes(amount) {
  if (amount >= Number(inputEl.min) && amount <= Number(inputEl.max)) {
    while (amount > 0) {
      const newDiv = document.createElement("div");
      newDiv.style.backgroundColor = `${getRandomHexColor()}`;
      initialSize += 10;
      newDiv.style.width = `${initialSize}px`;
      newDiv.style.height = `${initialSize}px`;
      createdDivs.push(newDiv);
      amount -= 1;
    }
    initialSize = 20;
    boxesEl.append(...createdDivs);
  } else alert(`The input is not valid`);
}

function destroyBoxes(event) {
  createdDivs.forEach((div) => div.remove());
}

createBtnEl.addEventListener("click", function () {
  createBoxes(inputEl.value);
  inputEl.value = "";
});

destroyBtnEl.addEventListener("click", destroyBoxes);

// ==========================
// Fix log:
// - adding input validation (vs input min & max)
// - resetting initialSize back to default in the end of the function, so the new collection of elements starts with the default size again;
