let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);

// Or you can define the comparison function using the arrow function syntax:
let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);

// And the following is the simplest since the elements of the array are numbers:

let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort((a, b) => a - b);

console.log(numbers);
