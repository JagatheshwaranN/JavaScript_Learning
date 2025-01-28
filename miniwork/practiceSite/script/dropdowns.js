const resultSection = document.getElementById("result");

function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("show");
}

function selectOption(option) {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownButton.textContent = option;
    dropdownMenu.classList.remove("show");
    resultSection.textContent = `You have selected: ${option}`;
}

  // Close the dropdown if clicked outside
//   window.onclick = function (event) {
//     if (!event.target.matches(".bootstrap-btn")) {
//       const dropdownMenus = document.getElementsByClassName("bootstrap-menu");
//       for (let i = 0; i < dropdownMenus.length; i++) {
//         dropdownMenus[i].classList.remove("show");
//       }
//     }
//   };
