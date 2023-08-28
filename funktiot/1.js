'use strict'
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Fruits: " +fruits);
console.log("Length of Fruits " + fruits.length);
console.log("Element at Index 2: " + fruits[1]);

console.log(fruits[fruits.length - 1]);

const vegetables = [];

for (let i = 0; i < 3; i++) {
  let vihannes = prompt("anna vihannes");
  vegetables.push(vihannes);
}
console.log("Vegetables: "+vegetables);
console.log("Length of vegetables: " + vegetables.length);
