const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", (event) => {
  if (
    inputEl.value.split(" ").join("").length === Number(inputEl.dataset.length)
  ) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});

console.log(inputEl.dataset.length);

// =======================
// Fix log:
// - getting the required input length value from dataset.length property (!!!) instead of having a fixed number in the code;
// - filtering out empty spaced in input.value using split & join
// - converting dataset.length property to Number;
// - removing valid/invalid class after adding the opposite class;
