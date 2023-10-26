"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// array to store a list of countries
const countries = ["United States", "Canada", "United Kingdom", "France", "Germany", "Australia", "Japan", "South Africa",];
// Function to print the list of countries
function printCountryList(countryList) {
    console.log("List of Countries:");
    for (const country of countryList) {
        console.log(country);
    }
}
// Call the function to print the list of countries
printCountryList(countries);
