// Retrieving HTML input elements by their IDs

// Input field for the total bill amount
let billTotalInput = document.getElementById("billTotalInput");

// Input field for the tip percentage
let tipInput = document.getElementById("tipInput");

// Input field for the number of people
let numberOfPeople = document.getElementById("numberOfPeople");

// Element to display the per-person total
let perPersonTotal = document.getElementById("perPersonTotal");

// Parsing the initial number of people as a number
let peopleCount = Number(numberOfPeople.textContent);

// Function to calculate the total bill and update the per person total
const calculateBill = () => {
    // Retrieve values from input fields
    let billTotal = Number(billTotalInput.value);
    let tipPercent = Number(tipInput.value) / 100;

    // Calculate tip and total amount
    let tipTotal = billTotal * tipPercent;
    let totalAmount = billTotal + tipTotal;

    // Calculate total amount per person
    let totalPerPerson = totalAmount / peopleCount;

    // Update the displayed per person total with proper formatting
    perPersonTotal.textContent = '$' + (totalPerPerson.toFixed(2));
};

// Function to increase the number of people and recalculate the bill
const increasePeople = () => {
    // Increment the people count
    peopleCount++;

    // Update the displayed number of people
    numberOfPeople.textContent = peopleCount;

    // Recalculate the bill
    calculateBill();
};

// Function to decrease the number of people and recalculate the bill
const decreasePeople = () => {
    // Ensure the people count doesn't go below 1
    if (peopleCount > 1) {
        peopleCount--;
    }

    // Update the displayed number of people
    numberOfPeople.textContent = peopleCount;
    
    // Recalculate the bill
    calculateBill();
};
