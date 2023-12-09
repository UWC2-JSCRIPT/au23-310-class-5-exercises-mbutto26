// When a user clicks the + element, the count should increase by 1 on screen.
const countEl = document.getElementById("counter");
let counter = 0;
const plusEl = document.getElementById("plus");
plusEl.addEventListener("click", () => {
  counter++;
  countEl.innerText = counter;

  console.log(`Count is ${counter}`);
});

// When a user clicks the – element, the count should decrease by 1 on screen.

const minusEl = document.getElementById("minus");
minusEl.addEventListener("click", () => {
  counter--;
  countEl.innerText = counter;
  console.log(`Count is ${counter}`);
});
