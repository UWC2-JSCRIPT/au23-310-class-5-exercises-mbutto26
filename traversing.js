// Given the <body> element as variable body,
// access the <main> node and log to the console.
const mainNode = document.querySelector("main");
console.log(mainNode);
// Given the <ul> element as variable ul,
// access <body>  and log to the console.

const childElement = document.querySelector("ul");
const bodyElement = childElement.parentNode.parentNode;
console.log(bodyElement);
// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const siblingElement = document.querySelector("p");
const lastEl = siblingElement.previousElementSibling.lastElementChild;
//const lastEl = siblingElement.childNode;
console.log(lastEl);
