"use strict";
//--Task--28---//
Object.defineProperty(exports, "__esModule", { value: true });
const age = 30;
if (age < 2) {
    console.log("The Person is a Baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The Person is a Toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The Person is a Kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The Person is a Teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The Person is an Adult.");
}
else {
    console.log("The Person is an Elder.");
}
