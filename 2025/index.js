const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "flex";

// HTMLCollection (Live Collection)
// **********************************
// Returned by methods like document.getElementsByClassName() and document.getElementsByTagName().
// Live Collection: Updates automatically if elements are added or removed from the DOM.
// Can only contain Element nodes (not text or comment nodes).
// Does NOT support forEach() directly; needs to be converted to an array first.

const views = document.getElementsByClassName("view");
console.log(views);

// NodeList (Static Collection)
// *****************************
// Returned by methods like document.querySelectorAll().
// Static Collection: Does NOT update automatically if elements are added/removed in the DOM.
// Can contain Element, Text, and Comment nodes (if applicable).
// Supports forEach(), making it easier to loop through.

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

evenDivs[0].style.backgroundColor = "Aqua";

for(i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.width="150px";
}

const navText = document.querySelector("nav h1");
navText.textContent = "Hello Buddy!";

const navbar = document.querySelector("nav");
navbar.innerHTML = "<h1>Welcome!</h1>";

// Parent Child Linking
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[2].previousSibling);
console.log(evenDivs[2].previousElementSibling);