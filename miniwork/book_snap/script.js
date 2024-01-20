// Selecting elements from the DOM
var container = document.querySelector(".container");
var overlay = document.querySelector(".overlay");
var popup_modal = document.querySelector(".popup-modal");
var book_title = document.getElementById("book-title");
var book_author = document.getElementById("book-author");
var book_summary = document.getElementById("book-summary");
var add_book_button = document.getElementById("add-book");
var cancel_button = document.getElementById("cancel-popup-modal");
var plus_button = document.getElementById("add-popup");

// Event listener for the plus button to show the overlay and pop-up modal
plus_button.addEventListener("click", function () {
    overlay.style.display = "block";
    popup_modal.style.display = "block";
});

// Event listener for the cancel button to hide the overlay and pop-up modal
cancel_button.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.display = "none";
    popup_modal.style.display = "none";
});

// Event listener for the add book button to add a new book to the container
add_book_button.addEventListener("click", function (event) {
    event.preventDefault();

    // Creating a new book container element
    var div_section = document.createElement("div");
    div_section.setAttribute("class", "book-container");
    div_section.innerHTML =
    `<h2>${book_title.value}</h2>
    <h5>${book_author.value}</h5>
    <p>${book_summary.value}</p>
    <button onclick="deleteBook(event)">Delete</button>`;

    // Appending the new book container to the main container
    container.append(div_section);

    // Hiding the overlay and pop-up modal
    overlay.style.display = "none";
    popup_modal.style.display = "none";

    // Clearing the input fields
    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
    document.getElementById("book-summary").value = "";
});

// Function to delete a book from the container
function deleteBook(event) {
    event.target.parentElement.remove();
}