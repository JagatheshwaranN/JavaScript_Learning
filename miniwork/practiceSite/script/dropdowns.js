const resultSection = document.getElementById("result");

function updateResult(dropdownType) {
  if(dropdownType === 'normalDropdown') {
    const normalDropdown = document.getElementById("normalDropdown");
    let selectedOption = normalDropdown.options[normalDropdown.selectedIndex].text;
    resultSection.textContent = `You have selected: ${selectedOption}`;
  }
  else if(dropdownType === 'optionTagDropdown') {
    const optionTagDropdown = document.getElementById("optionTagDropdown");
    let selectedOption = optionTagDropdown.options[optionTagDropdown.selectedIndex].text;
    resultSection.textContent = `You have selected: ${selectedOption}`;
  }
  else if(dropdownType === 'inputDropdown') {
    const optionTagDropdown = document.getElementById("inputDropdown");
    let selectedOption = optionTagDropdown.value;
    resultSection.textContent = `You have selected: ${selectedOption}`;
  }
  else if(dropdownType === 'multiSelectDropdown'){
    const multiSelectDropdown = document.getElementById("multiSelectDropdown");
    let selectedOptions = Array.from(multiSelectDropdown.selectedOptions).map(option => option.text);
    if(selectedOptions.length > 0){
      resultSection.textContent = `You have selected: ${selectedOptions.join(", ")}`;
    }
  }
}

// Bootstrap Dropdown
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

