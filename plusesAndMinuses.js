// When a user clicks the + element, the count should increase by 1 on screen.

const plusEl = document.getElementsById("plus");
plusEl.addEventListener("click ", (plus) => {
  const plusCounter = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});
// When a user clicks the – element, the count should decrease by 1 on screen.

const minusEl = document.getElementsById("minus");
minusEl.addEventListener("click ", (minus) => {
  const minusCounter = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;
});
