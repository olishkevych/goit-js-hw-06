const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (inputEl.value.trim() !== "") {
    outputEl.textContent = event.currentTarget.value.trim();
  } else outputEl.textContent = "Anonymous";
});

// ==========================================
// Fix log:
// - adding trim function;
// - setting a default value for empty input;
