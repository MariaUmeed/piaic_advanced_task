"use strict";
//---Task --42----//
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Supperb`);
    }
    return greatMagicians;
}
// Create an array of magician names
const magicianNames = ["Magician1-Ali", "Magician2-Faraz", "Magician3-Bilal"];
// Call makeGreat to modify the names and get the modified list
const greatMagicianNames = makeGreat(magicianNames);
// Call showMagicians to see the modified list
showMagicians(greatMagicianNames);
