/*
Recursion as an intro: recursion is the process of a function calling itself
example of friends going to lunch and one doesnt go if the other doesnt. The
first person calls then the second puts on hold the first, then the third to
the second.. until all agree to go on lunch.
Recursion is a process of calling itself. A function that calls itself is
called a recursive function
*/

function recurse() {
    // function code
    recurse();
    // function code
}

recurse();

/*
A recursive function must have a condition to stop calling itself.
Otherwise, the function is called indefinitely.
Once the condition is met, the function stops calling itself.
This is called a base condition.
*/

function recurse() {
    if (condition) {
        recurse();
    } else {
        // stop calling recurse()
    }
}

recurse();

/// Example 1: Print Numbers
// program to count down numbers to 1
function countDown(number) {
    // display the number
    console.log(number);
    // decrease the number value
    const newNumber = number - 1;
    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);

/// Example 2: Find Factorial
// program to find the factorial of a number
function factorial(x) {
    // if number is 0
    if (x === 0) {
        return 1;
        // return 1 because factorial of 0 is always 1
    }
    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;
// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}