function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const colorBtnEl = document.querySelector("button.change-color");
const colorValueEl = document.querySelector(".color");

colorBtnEl.addEventListener("click", onColorBtnClick);

function onColorBtnClick(event) {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorValueEl.textContent = getRandomHexColor();
}
