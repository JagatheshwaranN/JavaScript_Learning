var resultSection = document.getElementById("result");
var holdButton = document.getElementById("holdButton");
var hoverClickButton = document.getElementById("hoverClickButton");
var rightClickButton = document.getElementById("rightClickButton");
var holdTimer;
var isHolding = false;
var hasHeldFor5Seconds = false;
var isHovered = false;

function clickFuncResult(clickType) {
  if (clickType === "click") {
    resultSection.textContent = "Hurry! you have clicked the button.";
  } else if (clickType === "dblClick") {
    resultSection.textContent = "Hurry! you have double-clicked the button.";
  }
}

holdButton.addEventListener("mousedown", function () {
  isHolding = true;
  resultSection.textContent = "Holding..";
  holdTimer = setTimeout(function () {
    if (isHolding) {
      hasHeldFor5Seconds = true;
      resultSection.textContent =
        "Hurry! you have held the button for 5 seconds.";
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
  resultSection.textContent = "Hovered over the button.";
});

hoverClickButton.addEventListener("mouseout", function () {
  isHovered = false;
  resultSection.textContent = "Your result will display here..";
});

hoverClickButton.addEventListener("click", function () {
  if (isHovered) {
    resultSection.textContent = "Hurry! you hovered and clicked the button.";
  } else {
    resultSection.textContent = "You clicked the button without hovering.";
  }
});

rightClickButton.addEventListener('contextmenu', function() {
    event.preventDefault();
    resultSection.textContent="Hurry! you right-clicked the button."
})