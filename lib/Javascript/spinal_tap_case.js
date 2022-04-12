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
    let word = '';
    for (let characters of str) {
        // _ and " " (spaces) determine a new word
        if (characters === "_" || characters === " ") {
            words.push(word);
            word = '';
            // check if its upperCase by checking if the character is in between A and Z
            // we also check if word.length is empty
        } else if (characters >= "A" && characters <= "Z" && !word.length) {
            word = characters.toLowerCase();
            // we do the same for word.length not = to 0 (word have length)
        } else if (characters >= "A" && characters <= "Z" && word.length) {
            words.push(word);
            word = characters.toLowerCase();
        } else {
            word += characters;
        }
    }
    if (word.length) {
        words.push(word);
    }
    // with these conditions we have a string of words lowercase
    // we only need to combine them to make a sentence with (-) in between them
    return words.join("-");
}

spinalCase('This Is Spinal Tap');
