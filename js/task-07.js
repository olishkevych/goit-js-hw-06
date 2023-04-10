const inputEl = document.querySelector("input");
const textEl = document.querySelector("#text");
textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});

// =======================
// Fix log:
// - setting default font size to match the default input value;
// - changing the event type from 'change' to 'input';
