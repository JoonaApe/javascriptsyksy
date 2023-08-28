'use strict'
console.log("terveterve");
const x1 = +prompt("Anna koordinaatti x 1: ");
const y1 = +prompt("Anna koordinaatti wa: ");
const x2 = prompt("anna ");
const y2 = +prompt("annawa");

const distance = Math.pow(Math.sqrt(x2 - x1), 2) + Math.pow(y2 - y1, 2);
let dist = distance.toString();

document.getElementById("kohde").innerHTML = distance;
