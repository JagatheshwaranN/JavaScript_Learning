function showSimpleAlert() {
  alert("This is a simple alert!");
  updateResult("You clicked OK on Simple Alert.");
}

function showConfirmAlert() {
  let useChoice = confirm("Do yo confirm?");
  if (useChoice) {
    updateResult("You have clicked OK on Confirm Alert.");
  } else {
    updateResult("You have clicked Cancel on Confirm Alert.");
  }
}

function showPromptAlert() {
  let userInput = prompt("Enter your name:");
  if (userInput) {
    updateResult(`You have entered: ${userInput}`);
  } else {
    updateResult("You have clicked Cancel on Prompt Alert.");
  }
}

function showOverlayAlert() {
  document.getElementById("overlayAlert").classList.remove("hidden");
}

function handleOverlayResponse(choice) {
  updateResult(`You have clicked ${choice} on Modern Overlay Alert.`);
  document.getElementById("overlayAlert").classList.add("hidden");
}

function updateResult(message) {
  const resultSection = document.getElementById("result");
  resultSection.textContent = message;
}
