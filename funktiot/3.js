'use strict';

const numbers = [];
let userInput = prompt("Enter a number (or 'done' to finish): ");

while (userInput !== 'done') {
    const number = parseFloat(userInput); // Convert the input to a number
    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        alert("Enter a number!");
    }

    userInput = prompt("Enter a number (or 'done' to finish): ");
}

let evenNums = "";
for (let x  of numbers) {
    if (x % 2 === 0) {
        evenNums += x + ", ";
    }
}
if (evenNums === "") {
    evenNums = "None"
}

document.getElementById("kohde").innerHTML += "Even numbers: " +evenNums;