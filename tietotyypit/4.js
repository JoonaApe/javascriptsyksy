'use strict'
const score = +prompt("Anna pisteet: ");

if (score <= 39 && score >= 0) {
  document.getElementById("kohde").innerHTML = "arvosanasi on 0.";
} else if (score >= 40 && score <= 51) {
  document.getElementById("kohde").innerHTML = "arvosanasi on 1.";
} else if (score >= 52 && score <= 63) {
  document.getElementById("kohde").innerHTML = "arvosanasi on 2.";
} else if (score >= 64 && score <= 75) {
  document.getElementById("kohde").innerHTML = "arvosanasi on 3.";
} else if (score >= 76 && score <= 87) {
  document.getElementById("kohde").innerHTML = "arvosanasi on 4";
} else if (score >= 88 && score <= 100) {
  document.getElementById("kohde").innerHTML = "arvosanasi on 5";
} else {
  alert("Laitappa pojanloppi oikea arvosana!");
}
