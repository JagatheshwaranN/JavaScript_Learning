// ************* Event Listeners *************

// Syntax
// ========
// addEventListeners(event, function, useCapture)

// ReadyStateChange
// document.addEventListener("readystatechange", (event) => {
//     if(event.target.readyState === "complete"){
//         console.log("Complete..");
//     }
//     initApp();
// })

// const initApp = () => {
//     const view = document.getElementById('view3');
//     const form = view.querySelector("#myForm");
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         console.log("Submit Event")
//     }, true)
// }

// ************* Web Storage *************
document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        console.log("Complete..");
    }
    initApp();
})

const initApp = () => {
   const myContent = ["earn", "grow", "give"];
   const myObj = {
    name: "john",
    myContent : ["earn", "grow", "give"],
    logName: function() {
        console.log(this.name);
    }
   };
//    window.sessionStorage.setItem(
//     "mySessionStorage", JSON.stringify(myObj)
//    );

//    const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStorage"));
//    console.log(mySessionData);

window.localStorage.setItem(
    "mySessionStorage", JSON.stringify(myObj)
   );

   // Get the first item stored on LS
//    let key = localStorage.key(0);
//    console.log(key);

   // Get the length of items stored on LS
//    key = localStorage.length;
//    console.log(key);

   // To remove the stored Item
    // localStorage.removeItem("mySessionStorage");

    // To clear all the stored items
    // localStorage.clear();

   const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStorage"));
   console.log(mySessionData);
}
