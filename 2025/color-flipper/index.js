const button = document.getElementById("clickMe");
button.addEventListener("click", (event) => {
  updateMain();
});

const updateMain = () => {
    const colors = ["Red", "Blue", "Green"];
    const currentColor = colors[Math.floor(Math.random() * colors.length)];
    const main = document.querySelector("main");
    main.style.backgroundColor = currentColor;
    const p = document.getElementById("bgColor");
    p.textContent = `Background Color: ${currentColor}`;
};
