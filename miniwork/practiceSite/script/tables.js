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


document.addEventListener("DOMContentLoaded", function() {
  const table = document.getElementById("advancedTable").getElementsByTagName('tbody')[0];
  const rows = Array.from(table.getElementsByTagName("tr"));
  const rowsPerPageSelect = document.getElementById("rowsPerPage");
  const searchInput = document.getElementById("searchInput");
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const pageNumberSpan = document.getElementById("pageNumber");
  const entriesInfo = document.getElementById("entriesInfo");

  let currentPage = 1;
  let rowsPerPage = parseInt(rowsPerPageSelect.value);
  let filteredRows = [...rows];

  function updateTable() {
    const totalEntries = filteredRows.length;
    const totalPages = Math.ceil(totalEntries / rowsPerPage);
    if(currentPage > totalPages) {
      currentPage = totalPages;
    }
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    table.innerHTML="";
    filteredRows.slice(start, end).forEach(row => table.appendChild(row));
    
    pageNumberSpan.textContent = totalEntries === 0? "0" :currentPage;
    prevPageBtn.disabled = currentPage <= 1;
    nextPageBtn.disabled = currentPage >= totalPages || totalEntries === 0;

    entriesInfo.textContent = totalEntries === 0 ? "No matching records found": `Showing ${start + 1} to ${Math.min(end, totalEntries)} of ${totalEntries} entries`; 
  }

  // function updatePagination() {
  //   pageNumberSpan.textContent = totalEntries === 0? "0" :currentPage;
  //   prevPageBtn.disabled = currentPage <= 1;
  //   nextPageBtn.disabled = currentPage >= totalPages || totalEntries === 0;

  //   entriesInfo.textContent = totalEntries === 0 ? "No matching records found": `Showing ${start + 1} to ${Math.min(end, totalEntries)} of ${totalEntries} entries`; 
  // }

  rowsPerPageSelect.addEventListener("change", function() {
    rowsPerPage = parseInt(this.value);
    currentPage = 1;
    updateTable();
  })

  searchInput.addEventListener("input", function() {
    const query = this.value.toLowerCase();
    filteredRows = rows.filter(
      row => Array.from(row.getElementsByTagName("td")).some(cell => cell.innerText.toLowerCase().includes(query))
    );
    currentPage = 1;
    updateTable();
  })

  prevPageBtn.addEventListener("click", function() {
    if(currentPage > 1) {
      currentPage--;
      updateTable();
    }
  })

  nextPageBtn.addEventListener("click", function() {
    if(currentPage < Math.ceil(filteredRows.length / rowsPerPage)) {
      currentPage++;
      updateTable();
    }
  })

  updateTable();
})