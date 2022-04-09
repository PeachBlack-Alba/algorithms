//You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of
// the same value as these arguments.
// Note: You have to use the arguments object.

function destroyer(arr) {
    // to access the arguments we use spread operator (adds a coma to all the arguments, so it separates them)
    // we only one position 1 and two of the 3 arguments (first is the destroyer array)
    // we will use .slice() method which takes an array and make a copy of a portion
    // .slice(2) will take from index 2 until the end
    // .slice(2,4) will take from index 2 to 3 (4 excluded)
    const argsArr = [...arguments].slice(1);
    // now we want to loop through the arr (first argument of the function) and remove all the elements that are
    // the same as arguments 1 and 2 (2,3)
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        // if element of arr is not included to the argsArr we push it to filteredArr
        if (!argsArr.includes(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/////

// clean up

function destroyer(arr) {
    const argsArr = [...arguments].slice(1);

    const filteredArr = [];
    for (const el of arr) {
        if (!argsArr.includes(el)) {
            filteredArr.push(el);
        }
    }
    return filteredArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
