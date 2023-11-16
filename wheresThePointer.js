// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

function printMousePos(event) {
  document.table.textContent =
    "clientX: " + event.clientX + " - clientY: " + event.clientY;
}

document.addEventListener("click", printMousePos);
