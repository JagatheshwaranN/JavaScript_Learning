const resultSection = document.getElementById("result");
const holdButton = document.getElementById("holdButton");
const hoverClickButton = document.getElementById("hoverClickButton");
const rightClickButton = document.getElementById("rightClickButton");
let holdTimer = "";
let isHolding = false;
let hasHeldFor5Seconds = false;
let isHovered = false;

function clickFuncResult(clickType) {
  if (clickType === "click") {
    resultSection.textContent = "Hooray! you have clicked the button.";
  } else if (clickType === "dblClick") {
    resultSection.textContent = "Hooray! you have double-clicked the button.";
  }
}

holdButton.addEventListener("mousedown", function () {
  isHolding = true;
  resultSection.textContent = "Holding..";
  holdTimer = setTimeout(function () {
    if (isHolding) {
      hasHeldFor5Seconds = true;
      resultSection.textContent =
        "Hooray! you have held the button for 5 seconds.";
    }
  }, 5000);
});

holdButton.addEventListener("mouseup", function () {
  isHolding = false;
  if (!hasHeldFor5Seconds) {
    clearTimeout(holdTimer);
    resultSection.textContent = "Button released before 5 seconds.";
  }
});

holdButton.addEventListener("mouseleave", function () {
  if (isHolding & !hasHeldFor5Seconds) {
    isHolding = false;
    clearTimeout(holdTimer);
    resultSection.textContent = "Button released before 5 seconds.";
  }
});

hoverClickButton.addEventListener("mouseover", function () {
  isHovered = true;
  resultSection.textContent = "Hooray! you have hovered over the button.";
});

hoverClickButton.addEventListener("mouseout", function () {
  isHovered = false;
  resultSection.textContent = "Your result will display here..";
});

hoverClickButton.addEventListener("click", function () {
  if (isHovered) {
    resultSection.textContent =
      "Hooray! you have hovered and clicked the button.";
  } else {
    resultSection.textContent = "You have clicked the button without hovering.";
  }
});

rightClickButton.addEventListener("contextmenu", function () {
  event.preventDefault();
  resultSection.textContent = "Hooray! you have right-clicked the button.";
});
