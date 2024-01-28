// Selecting the container element using its class
var container = document.querySelector(".container");

// Selecting the overlay element using its class
var overlay = document.querySelector(".overlay");

// Selecting the popup modal element using its class
var popupModel = document.querySelector(".popup-modal");

// Selecting the input field for book title using its ID
var bookTitle = document.getElementById("book-title");

// Selecting the input field for book author using its ID
var bookAuthor = document.getElementById("book-author");

// Selecting the textarea for book summary using its ID
var bookSummary = document.getElementById("book-summary");

// Selecting the add book button using its ID
var addBookButton = document.getElementById("add-book");

// Selecting the cancel button inside the popup modal using its ID
var cancelButton = document.getElementById("cancel-popup-modal");

// Selecting the plus button inside the popup modal using its ID
var plusButton = document.getElementById("add-popup");

// Event listener for the plus button to show the overlay and pop-up modal
plusButton.addEventListener("click", function () {
    // Setting the display style of overlay to "block" to make it visible
    overlay.style.display = "block";

    // Setting the display style of popup modal to "block" to make it visible
    popupModel.style.display = "block";
});

// Event listener for the cancel button to hide the overlay and pop-up modal
cancelButton.addEventListener("click", function (event) {
    // Preventing the default behavior of the event (e.g., preventing form submission)
    event.preventDefault();

    // Setting the display style of overlay to "none" to hide it
    overlay.style.display = "none";

    // Setting the display style of popup modal to "none" to hide it
    popupModel.style.display = "none";
});

// Event listener for the add book button to add a new book to the container
addBookButton.addEventListener("click", function (event) {
    // Preventing the default behavior of the event (e.g., preventing form submission)
    event.preventDefault();

    // Creating a new div element to represent a book container
    var div_section = document.createElement("div");

    // Setting the class attribute of the div element to "book-container"
    div_section.setAttribute("class", "book-container");

    // Setting the inner HTML of the div element with book information
    div_section.innerHTML =
        `<h2>${bookTitle.value}</h2>
        <h5>${bookAuthor.value}</h5>
        <p>${bookSummary.value}</p>
        <button onclick="deleteBook(event)">Delete</button>`;

    // Appending the new div element to the container
    container.append(div_section);

    // Hiding the overlay and popup modal after adding the book
    overlay.style.display = "none";
    popupModel.style.display = "none";

    // Clearing the input fields after adding the book
    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
    document.getElementById("book-summary").value = "";
});

// Function to delete a book container when the corresponding delete button is clicked
function deleteBook(event) {
    // Removing the parent element (book container) of the clicked delete button
    event.target.parentElement.remove();
}
