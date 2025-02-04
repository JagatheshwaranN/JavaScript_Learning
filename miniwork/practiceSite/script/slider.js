function updateResult() {
  const slider = document.getElementById("slider");
  let sliderValue = slider.value;
  // document.getElementById('sliderValue').innerText = sliderValue;
  document.getElementById(
    "result"
  ).textContent = `You have selected value: ${sliderValue}`;
}
