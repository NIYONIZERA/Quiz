const numbers = [1, 2, 3, 5, 10];
// Array Sum
//function that calculates the sum of all elements in an array
function arraySum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Even Numbers
//function that prints all even numbers from an array
function printEvenNumbers(arr) {
    arr.forEach(num => {
        if (num % 2 === 0) {
            console.log(num);
        }
    });
}

// Array Reverse
//function to reverse the elements of an array
function reverseArray(arr) {
    return arr.reverse();
}

// Array Filter
//function that filters out all elements less than 10 from an array
function filterArray(arr) {
    return arr.filter(num => num >= 10);
}

// Array Average
//function that Calculate and print the average of elements in an array
function arrayAverage(arr) {
    const sum = arraySum(arr);
    return sum / arr.length;
}

// Array Search
// function that searches for a specific element in an array and returns its index
function searchArray(arr, element) {
    return arr.indexOf(element);
}

// Duplicate Elements
function findDuplicates(arr) {
    const duplicates = {};
    arr.forEach(item => {
        if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
            duplicates[item] = true;
        }
    });
    return Object.keys(duplicates);
}

// Array Sorting
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(arraySum(numbers)); 
printEvenNumbers(numbers);  
console.log(reverseArray(numbers)); 
console.log(filterArray(numbers)); 
console.log(arrayAverage(numbers));  
console.log(searchArray(numbers, 5)); 
console.log(findDuplicates(numbers)); 
console.log(sortArray(numbers)); 