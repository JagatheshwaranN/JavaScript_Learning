function updateParentResult() {
  const username = document.getElementById("username").value;
  parent.postMessage({ type: "username", value: username }, "*");
}

function updateChildResult() {
  const email = document.getElementById("email").value;
  parent.postMessage({ type: "email", value: email }, "*");
}

window.addEventListener("message", function (event) {
  if (event.origin !== window.location.origin) return; // Security check
  if (event.data.type === "username") {
    document.getElementById(
      "result"
    ).innerText = `You have entered UserName: ${event.data.value}`;
  } else if (event.data.type === "email") {
    parent.document.getElementById(
      "result"
    ).innerText = `You have entered Email: ${event.data.value}`;
  }
});
