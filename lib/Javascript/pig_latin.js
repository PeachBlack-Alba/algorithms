//Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word,
// and add ay to it.
// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
const vowels = ['a', 'e', 'i', 'o', 'u'];
const firstChar = srt[0];
// now that we have the frst character, we can check if it s a voewl or not
if (vowels.includes(firstChar)) {
    // if the first character includes a vowel -> return srt + "way"
    return str + "way";
    // Since we are returning in the "if" statement aboce, we cant do "else if" now,
    //since if it goes to the first if, it would never go to the second and instead
    //would return the return statement
}
// now the second rule, how to define if it doesnt contain a vowel?
let hasNoVowels = true;
for (cont c of str) {
if (vowels.includes(c)){
hasNoVowels = false;
//Break out of the loop onces we find the first vowel
break;
}
}
if (hasNoVowels){
return str + "ay";
}
let consonantCluster = '';
let firstVowelIndex = 0;
for (let i=0; i< str.length; i++){
const c = srt[i];
if (vowels.includes(c)){
firstVowelIndex = i;
break;
}

consonantCluster += c;
}
return str.substring(firstVowelIndex) + consonantCluster + "ay";
}

translatePigLatin("consonant");