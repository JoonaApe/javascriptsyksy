"use strict";

const sivuA = +prompt("Anna sivu1");
const sivuB = +prompt("Anna sivu2");
const sivuC = +prompt("Anna sivu3");

if (sivuA === sivuB && sivuA === sivuC) {
  document.getElementById("kohde").innerHTML = "kaikki sivut yhtä pitkiä";
} else if (sivuA === sivuB || sivuA === sivuC || sivuB === sivuC) {
  document.getElementById("kohde").innerHTML = "kaksi sivua on yhtäpitkiä";
} else {
  document.getElementById("kohde").innerHTML = "Voivittu";
}
