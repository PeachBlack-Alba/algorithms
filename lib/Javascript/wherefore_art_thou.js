//Make a function that looks through an array of objects (first argument) and returns
// an array of all objects that have matching name and value pairs (second argument).
// Each name and value a pair of the source object has to be present in the object from the collection if
// it is to be included in the returned array.
// For example, if the first argument is [{ first: "Romeo", last: "Montague" },
// { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
// and the second argument is { last: "Capulet" }, then you must return the third object
// from the array (the first argument), because it contains the name and its value,
// that was passed on as the second argument.


function whatIsInAName(collection, source) {
    const arr = [];
    // we want to first loop on all the objects of the first argument
    // we also want to have all the keys of the second parameter (source) in one variable
    const keys = Object.keys(source);
    for (const obj of collection) {
     let hasAllKeyValuePairs = true;
     for (const key of keys){
         if (obj[key] !== source[key]){
             hasAllKeyValuePairs = false;
             break;
         }
     }
     if(hasAllKeyValuePairs){
         arr.push(obj);
     }
    }
    return arr;
}

whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
    first: "Tybalt",
    last: "Capulet"
}], {last: "Capulet"});