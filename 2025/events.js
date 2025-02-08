// ************* Event Listeners *************

// Syntax
// ========
// addEventListeners(event, function, useCapture)


// Use of Named functions
const showAlert = () => {
    alert("Hi! I'm Alert!")
}

// h2.addEventListener("click", showAlert, false);
// h2.removeEventListener("click", showAlert, false);

// Use of Anonymous functions

// Standard Function
// h2.addEventListener("click", function (event) {
//     console.log(event.target);
//     event.target.textContent = "Hello!"
// }, false);


// Arrow Function
// h2.addEventListener("click", (event) => {
//     console.log(event.target);
//     event.target.textContent = "Hello!"
// }, false);

// ReadyStateChange
document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        console.log("Complete..");
    }
    initApp();
})

// Event bubbling

// In JavaScript, event bubbling is a concept where an event triggered on a 
// child element bubbles up to its parent elements in the DOM hierarchy.

// We can either use stopPropagation function in all event listeners or
// we can set the useCapture state to TRUE.

// When useCapture is set to TRUE, the changes will be done from Paren to Child.
// But, viewing it visually on the screen is difficult as its very quick.

// const initApp = () => {
//     const view = document.getElementById('view2');
//     view.style.display = "flex";
//     const div = document.querySelector("div");
//     const h2 = div.querySelector("h2");
//     console.log(h2);

//     view.addEventListener("click", (event) => {
//         view.style.backgroundColor = "aqua";
//     }, true)

//     div.addEventListener("click", (event) => {
//         div.style.backgroundColor = "green";
//     }, true)

//     h2.addEventListener("click", (event) => {
//         // To prevent the event bubbling we can use stopPropagation function
//         // event.stopPropagation();
//         h2.textContent = "Hello!";
//     }, true)
// }

// Class Add / Remove
const initApp = () => {
    const view = document.getElementById('view2');
    view.style.display = "flex";
    const div = document.querySelector("div");
    const h2 = div.querySelector("h2");
    console.log(h2);

    view.addEventListener("click", (event) => {
        // To add and remove class value
        // view.classList.remove("darkblue");
        // view.classList.add("aqua");
        
        // To change the color of Background on each click
        view.classList.toggle("aqua");
        view.classList.toggle("darkblue");
        console.log(view.getAttribute("class"));
    }, true)

    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "green";
    }, true)

    h2.addEventListener("click", (event) => {
        // To prevent the event bubbling we can use stopPropagation function
        // event.stopPropagation();
        const text = event.target.textContent;
        text === "Welcome!" ? event.target.textContent = "Hello!" : event.target.textContent = "Welcome!";
    }, true)
}

