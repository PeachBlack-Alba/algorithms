let array = [1, 19, 3, 5, 43, 2, 76, 58];

function insertionSort(array) {
    // we need to compare the 2 arrays, so if we start from 0 index we do not have an array to compare
    for (let i = 1; i < array.length; i++) {
        // we need another descending loop
        for (let j = i; j > 0; j--) {
            if (array[j] < array[i]) {
                // if array[j] < array[i] we swap values
                const tempNum = array[j];
                array[j] = array[i];
                array[j - 1] = tempNum;
            } else {
                break;
            }

        }
    }
    return array;
}

console.log(insertionSort());