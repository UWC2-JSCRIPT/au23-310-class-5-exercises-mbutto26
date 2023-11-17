// Given the <body> element as variable body,
// access the <main> node and log to the console.
const mainNode = document.body;
console.log(mainNode);
// Given the <ul> element as variable ul,
// access <body>  and log to the console.

const childElement = document.getElementsByName("ul");
const bodyElement = childElement.previousSibling;
console.log(bodyElement);
// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const siblingElement = document.getElementsByTagName(`li`)[3];
siblingElement.childNodes;
console.log(siblingElement);
