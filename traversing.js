// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector("body");
const mainEl = body.getAttribute("main");
console.log(mainEl);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector("ul");
const bodyEl = body.getAttribute("body");

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector("p", "li", [2]);
console.log(p);
