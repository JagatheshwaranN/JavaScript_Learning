function updateResult(dateStr) {
  document.getElementById("result").innerText = `Selected Date: ${dateStr}`;
}

flatpickr("#singleDatePicker", {
  dateFormat: "d/m/Y", // Set to DD/MM/YYYY format
  // minDate: "today", 
  defaultDate: new Date(), // Show today's date by default
  prevArrow: "←", // Set left arrow
  nextArrow: "→", // Set right arrow
  onChange: function (_selectedDates, dateStr) {
    updateResult(dateStr);
  },
});

flatpickr("#dualDatePicker", {
  mode: "single",
  dateFormat: "d/m/Y", // Set to DD/MM/YYYY format
  // minDate: "today", 
  defaultDate: new Date(), // Show today's date by default
  showMonths: 2, // Dual Month Layout
  prevArrow: "←", // Set left arrow
  nextArrow: "→", // Set right arrow
  onChange: function (_selectedDates, dateStr) {
    updateResult(dateStr);
  },
});

// function updateResult() {
//     const singleDate = document.getElementById("singleDatePicker").value;
//     if(singleDate){
//         const formattedDate = formatDate(singleDate);
//         document.getElementById("result").innerText = `You have selected the date: ${formattedDate}`;
//     }
// }

// function formatDate(dateString) {
//     const[year, month, day] = dateString.split("-");
//     return `${day}/${month}/${year}`;
// }
