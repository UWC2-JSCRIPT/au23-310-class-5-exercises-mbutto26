// Do not change
document.getElementById("cat").addEventListener("click", () => {
  alert("meow!");
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

element.addEventListener("click", function () {
  document.addEventListener("more-info").innerHTML = "Here's some info";
});
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
element.addEventListener("click", function () {
  document.addEventListener("bark").innerHTML = "Bow wow!";
});
