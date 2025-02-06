document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".input-group input");

  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.nextElementSibling.style.visibility = "hidden";
    });
    input.addEventListener("input", function () {
      this.nextElementSibling.style.visibility = "hidden";
    });
    input.addEventListener("blur", function () {
      if (this.value.trim()) {
        this.nextElementSibling.style.visibility = "visible";
      }
    });
  });
});
