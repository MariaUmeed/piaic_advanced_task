"use strict";
//--TASK 43--//
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
// Create an array of magician names
const magicianNames = ["Magician1-Ali", "Magician2-Faraz", "Magician3-Bilal"];
// Create a copy of the original array
const magicianNamesCopy = [...magicianNames];
// Call makeGreat with the copied array to get the modified list
const greatMagicianNames = makeGreat(magicianNamesCopy);
// Call showMagicians with the original and modified arrays
console.log("Original Magician Names:");
showMagicians(magicianNames);
console.log("\nGreat Magician Names:");
showMagicians(greatMagicianNames);
