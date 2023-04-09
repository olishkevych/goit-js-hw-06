const inputEl = document.querySelector("input");
const textEl = document.querySelector("#text");

inputEl.addEventListener("change", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
