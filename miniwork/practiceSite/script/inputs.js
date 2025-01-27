let resultSection = document.getElementById("result");

function updateResult(inputId) {
  let inputValue = document.getElementById(inputId).value;
  if (inputId === "normalInput") {
    resultSection.textContent = inputValue
      ? `You typed: ${inputValue}`
      : "Your result will display here..";
  } else if (inputId === "prefilledInput") {
    resultSection.textContent = inputValue
      ? `Prefilled Input updated to: ${inputValue}`
      : "Your result will display here..";
  } else if (inputId === "clearInput") {
    if (inputValue.trim() === "") {
      resultSection.textContent = "Input cleared!";
    }
    //   else {
    //     // For any other input
    //     resultSection.textContent = `Current value in ${inputId}: ${inputValue}`;
    //   }
  }
}
