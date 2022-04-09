// We'll pass you an array of two numbers.
// Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all
// the numbers between 1 and 4 (both inclusive) is 10.

// because the first number doesnt always have to be the small one we need to sort the array first

function sumAll(arr) {
    let min, max;
    if (arr[0] > arr[1]) {
        max = arr[0];
        min = arr[1];
    } else {
        max = arr[1];
        min = arr[0];
    }
    // now we want to do a for loop to go through all the num in between and att them up in a var called sum
    // we initialize the variable at 0 bc we dont have anything yet
    let sum = 0;
    // we want to loop from the min to the max included
    for (let i = min; i <= max; i++) {
        // adding i to the sum variable
        sum += i;
    }
    return sum;
}

sumAll([1, 4]);
////////

// another way using ternary operator
function sumAll(arr) {
    // now we use const bc this variable will not change
    const min = arr[0] < arr[1] ? arr[0] : arr[1];
    const max = arr[0] > arr[1] ? arr[0] : arr[1];

    // now we want to do a for loop to go through all the num in between and att them up in a var called sum
    // we initialize the variable at 0 bc we dont have anything yet
    let sum = 0;
    // we want to loop from the min to the max included
    for (let i = min; i <= max; i++) {
        // adding i to the sum variable
        sum += i;
    }
    return sum;
}

sumAll([1, 4]);

////
// using spread operator
function sumAll(arr) {

    // now we want to do a for loop to go through all the num in between and att them up in a var called sum
    // we initialize the variable at 0 bc we dont have anything yet
    let sum = 0;
    // we want to loop from the min to the max included
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        // adding i to the sum variable
        sum += i;
    }
    return sum;
}
