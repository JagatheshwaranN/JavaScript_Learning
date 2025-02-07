function sortTable(columnIndex) {
  // Get the table body
  let table = document.querySelector(".sortable-table tbody");

  // Convert the table rows into an array
  let rows = Array.from(table.rows);

  // Check current sorting order
  let isAscending = table.getAttribute("data-sort") !== "asc";

  // Sort the rows
  rows.sort((rowA, rowB) => {
    let cellA = rowA.cells[columnIndex].innerText.toLowerCase();
    let cellB = rowB.cells[columnIndex].innerText.toLowerCase();

    // If both values are numbers, sort numerically
    if (!isNaN(cellA) && !isNaN(cellB)) {
      return isAscending ? cellA - cellB : cellB - cellA;
    }

    // Otherwise, sort alphabetically
    return isAscending
      ? cellA.localeCompare(cellB)
      : cellB.localeCompare(cellA);
  });

  // Clear the table body
  table.innerHTML = "";

  // Append the sorted rows back to the table
  rows.forEach((row) => table.appendChild(row));

  // Update the sorting order for the next click
  table.setAttribute("data-sort", isAscending ? "asc" : "desc");
}
