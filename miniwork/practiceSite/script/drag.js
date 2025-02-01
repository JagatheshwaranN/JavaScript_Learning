function startDrag(event) {
  event.dataTransfer.setData("dragDrop", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("dragDrop");
  const draggedElement = document.getElementById(data);
  // Append the dragged element to the destination box
  event.target.appendChild(draggedElement);
  // Change the text of the drop box to "Dropped"
  //event.target.textContent = "Dropped";
  updateResult("You have dropped the item!");
}

function updateResult(message) {
  const resultSection = document.getElementById("result");
  resultSection.textContent = message;
}
