'use strict'
const numbers = [];

for (let i = 1; i <= 5; i++) {
  let numbas = +prompt(`anna numero ${i}`);
  numbers.push(numbas);
}
document.getElementById("kohde").innerHTML = "Numbers: " +numbers;

let test = +prompt("Anna numero nii katon onko se jo listalla.");
if (numbers.includes(test)) {
  alert("Numero on listalla.");
} else {
  alert("Numero ei ollu listalla vielä :)!");
}

numbers.pop();
document.getElementById("kohde").innerHTML += "<br>Updated numbers: " +numbers;

numbers.sort(function (a, b) {
  return a - b;
});
document.getElementById("kohde").innerHTML += "<br> Sorted numbers: " +numbers;

