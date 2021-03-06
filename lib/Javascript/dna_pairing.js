// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    const output = [];
    for (const c of str) {
        if (c == "A") {
            output.push([c, "T"]);
        } else if (c == "T") {
            output.push([c, "A"]);
        } else if (c == "C") {
            output.push([c, "G"]);
        } else if (c == "G") {
            output.push([c, "C"]);
        }
    }
    return output;
}

pairElement("GCG");