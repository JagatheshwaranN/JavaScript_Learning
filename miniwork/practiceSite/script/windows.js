function openWindowAsTab() {
  const newTab = window.open("about:blank", "_blank");
  newTab.document.write(
    "<h1 style='font-family: Poppins, sans-serif; color: #444;'>You have opened a new window as a Tab</h1>"
  );
  newTab.document.close();
  updateResult("You have opened a new window as a Tab.");
}

function openWindowAsWindow() {
  const newWindow = window.open(
    "about:blank",
    "_blank",
    "width=600,height=400"
  );
  newWindow.document.write(
    "<h1 style='font-family: Poppins, sans-serif; color: #444;'>You have opened a new window</h1>"
  );
  newWindow.document.close();
  updateResult("You have opened a new window.");
}

function updateResult(message) {
  const resultSection = document.getElementById("result");
  resultSection.textContent = message;
}
