'use strict'

const numbers = [1,32,51,2,6]
console.log("Original  array: " +numbers)
function sorter(numbers) {
    let sortedNums = numbers.sort(function (a, b){return a - b});
    console.log("Sorted numbers " +sortedNums);
}
sorter(numbers)