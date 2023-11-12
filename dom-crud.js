// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

const para = document.createElement("cta");
para.id = `cta`;
const paraText = document.createTextNode("Buy Now!");
para.appendChild(paraText);

const body = document.getElementsByTagName("body")[0];
body.appendChild(para);

// Access (read) the data-color attribute of the <img>,
// log to the console

const imgColors = document.querySelector("img").getAttribute("data-color");

console.log("imgColors");

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

const thirdList = document.getElementsByTagName("li")[2];
thirdList.classList.add(`highlight`);

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const bodyElement = document.getElementById("parent");
const paragraph = document.getElementById("child");
bodyElement.removeChild(paragraph);
