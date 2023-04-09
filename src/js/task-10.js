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
let initialSize = 20;

function createBoxes(amount) {
  while (amount > 0) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = `${getRandomHexColor()}`;
    initialSize += 10;
    newDiv.style.width = `${initialSize}px`;
    newDiv.style.height = `${initialSize}px`;
    createdDivs.push(newDiv);
    amount -= 1;
  }
  boxesEl.append(...createdDivs);
}

function destroyBoxes(event) {
  createdDivs.forEach((div) => div.remove());
}

createBtnEl.addEventListener("click", function () {
  createBoxes(inputEl.value);
  inputEl.value = "";
});

destroyBtnEl.addEventListener("click", destroyBoxes);
