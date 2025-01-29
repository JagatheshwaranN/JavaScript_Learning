const resultSection = document.getElementById("result");

function updateResult() {
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    let selectedCheckboxes = document.querySelectorAll('input[name="travel"]:checked');    
    let resultText = "";
    // If a checkbox is clicked, reset radio selection
    if (selectedGender) {
        if (selectedCheckboxes.length > 0) {
            selectedGender.checked = false;
        }
    }
    // Get selected radio button value
    if (selectedGender) {
        resultText = "You have selected: " + selectedGender.value + "\n";
    }
    // Get selected checkboxes values
    if (selectedCheckboxes.length > 0) {
        let travelTypes = Array.from(selectedCheckboxes).map(cb => cb.value).join(", ");
        resultText = "You have checked: " + travelTypes;
    }
    resultSection.textContent = resultText;
}
