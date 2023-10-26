"use strict";
//--task 22--//
Object.defineProperty(exports, "__esModule", { value: true });
//-- an array of country objects--//
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
    //for (let i = 0; i <= countryList.length; i++) { // Intentional error: Use "<=" instead of "<"
    for (let i = 0; i < countryList.length; i++) {
        // Rest of the code remains the same
        console.log(`Name: ${countryList[i].name}`);
        console.log(`Capital: ${countryList[i].capital}`);
        console.log(`Population: ${countryList[i].population}`);
        console.log("--------------------");
    }
}
// Call the function to print information about countries
printCountryInfo(countries);
//----In this code, I intentionally changed the loop condition from i < countryList.length to
// i <= countryList.length, which will cause an "index out of bounds" error when the loop 
//tries to access an index that doesn't exist.---//
