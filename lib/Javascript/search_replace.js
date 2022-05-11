// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to
// replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
    // We want to check first if before is capitalized. To do so, we create a boolean
    // if the index 0 of before is between A and Z, means is capital letter
    const isCapitalized = before[0] >= 'A' && before[0] <= 'Z';
    // Since the note says that we need to keep the capitalized or not from before argument in the after argument,
    // we need to create a new variable "casedAfter" that will return the before Capitalized or not depending on isCapitalized
    let casedAfter;
    if (isCapitalized) {
        // if the before begging with Capital letter, we will assign casedAfter to Uppercase the first index + the rest of the string
        // substring() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
        casedAfter = after[0].toUpperCase() + after.substring(1);
    } else {
        // if isCapitalized false, so the first index of before is a lowercase
        casedAfter = after[0].toLowerCase() + after.substring(1);

    }
    // Now we will use casedAfter instead of after, because casedAfter returns already the argument with upper or lower case
    // depending on isCapitalized (is before upper case or lower case?)
    // Next step is to search for before argument in str and replace is with casedAfter
    // For this if we will use string.replace() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    // it will only replace the first occurrence of before
    // to replace in all the occurrence possible (all the before in the string), we need to use a regex
    return str.replace(before, casedAfter);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");