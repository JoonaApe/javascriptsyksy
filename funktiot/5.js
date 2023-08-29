'use strict'

const numbers = [1,32,51,2,6]
console.log("Original  array: " +numbers)

function sortArray(numbers, order) {
    if (order === "asc") {
        let sortedNums = numbers.sort(function (a, b) {
            return a - b
        });
        console.log("Sorted numbers in ascending order: " +sortedNums);
    }
    if (order === "desc") {
        let sortedNums = numbers.sort(function (a, b) {
            return b - a
        });
        console.log("Sorted numbers in descending order: " +sortedNums)

    }
}
sortArray(numbers,"asc");
sortArray(numbers,"desc");