const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", (event) => {
  if (inputEl.value.length === 6) inputEl.classList.add("valid");
  else inputEl.classList.add("invalid");
});
