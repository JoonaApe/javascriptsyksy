'use strict'
const enter = +prompt("Anna positiivinen luku.");
let sum = 0;

for (let i = 1; i <= enter; i++) {
  console.log(i);
  sum = sum + i;
}

document.getElementById("kohde").innerHTML = sum;
