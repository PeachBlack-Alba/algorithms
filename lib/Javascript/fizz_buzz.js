// Function that takes a number as a parameter (num)
// This function will log out to the console every number from 1 to num
// If we pass the num 20, the log out should be all numbers from 1 to 20
// If the number is divisible by 3, we will also print 'Fizz' instead of the number
// If the number is divisible by 5, we will also print 'Buzz' instead of the number
// If the number is divisible by 3 and 5, we will also print 'FizzBuzz' instead of the number

// Context:
// The modulus operator is dividing the number and giving us the remains of the operation
// For example, console.log(7 % 3) will return 1

function FizzBuzz (num) {
    for (var i = 1; i <= num; i ==) {
     if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
    // i = 1 because we dont want 0
    else if (i % 3 === 0) console.log('Fizz');
    // This means i is evenly divisible by 3
    else if (i % 5 === 0) console.log('Buzz');
    // else if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
    // This last statement will not work because any number divisible by 3 or 5 will enter to the oder
    // Two scopes and return 'Fizz' ir "Buzz"
    // Therefore we need another solution like changing the line in the top so its the first requirement
    else console.log(i);
    }
}

FizzBuzz(20);
