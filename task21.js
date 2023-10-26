"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define an array of country objects
const countries = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        population: 331002651,
    },
    {
        name: "Canada",
        capital: "Ottawa",
        population: 37742154,
    },
    {
        name: "United Kingdom",
        capital: "London",
        population: 67886011,
    },
    {
        name: "France",
        capital: "Paris",
        population: 65273511,
    },
    {
        name: "Germany",
        capital: "Berlin",
        population: 83783942,
    },
];
// Function to print information about countries
function printCountryInfo(countryList) {
    console.log("Country Information:");
    for (const country of countryList) {
        console.log(`Name: ${country.name}`);
        console.log(`Capital: ${country.capital}`);
        console.log(`Population: ${country.population}`);
        console.log("--------------------");
    }
}
// Call the function to print information about countries
printCountryInfo(countries);
