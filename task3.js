"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Task 3 - Name of a Person Lowrcase,uppercase and tittle case
let person_name = "Maria";
let uppercase = person_name.toUpperCase();
let lowercase = person_name.toLowerCase();
const titlecase = person_name.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
});
console.log(uppercase);
console.log(lowercase);
console.log(titlecase);
