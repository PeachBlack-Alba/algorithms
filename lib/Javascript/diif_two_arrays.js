// Compare two arrays and return a new array with
// any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.
//Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    // loop in both arrays and push the not repeated numbers in a new array called union
    const union = [];
    // check if i of arr1 and 2 is in union, otherwise push it to union
    // union has the unique elements of both arrays
    for (let i = 0; i < arr1.length; i++) {
        if (!union.includes(arr1[i])) {
            union.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!union.includes(arr2[i])) {
            union.push(arr2[i]);
        }
    }
    const symmDiff = [];
    for (let i = 0; i < union.length; i++) {
        const currentElement = union[i];
        if (arr1.includes(currentElement) && !arr2.includes(currentElement)) {
            symmDiff.push(currentElement);
        } else if (arr2.includes(currentElement) && !arr1.includes(currentElement)) {
            symmDiff.push(currentElement)
        }
    }
    // this array will contain the elements that are only in one array
    return symmDiff;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);