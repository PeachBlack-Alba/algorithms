
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
// spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
// spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
// spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

// first think about the rules we need to follow:
// 1) all lowercase
// 2) _ and " " (spaces) becomes hypens (-)
// 3) capital case always determines the start of a new word, but not all words start with a capital case.
// Specifically, the first word in the string does not have to be capitalized


function spinalCase(str) {
    // first we need to return all the words in an array of strings
    // ("this is a spinal tap") => ["this", "is", "a", "spinal", "tap"]
    const words = [];
    // we will use this word variable to store our word when created
    const word = '';
    for(let characters of str){
        // _ and " " (spaces) determine a new word


    }
    return str;
}

spinalCase('This Is Spinal Tap');
