const subtractBtnEl = document.querySelector('button[data-action="decrement"]');
const addBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

subtractBtnEl.addEventListener("click", (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

addBtnEl.addEventListener("click", (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
