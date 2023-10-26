"use strict";
//Task--39--//
Object.defineProperty(exports, "__esModule", { value: true });
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
// Calling the function with three city-country pairs and printing the returned values
const location1 = cityCountry("Lahore", "Pakistan");
const location2 = cityCountry("New York", "USA");
const location3 = cityCountry("Tokyo", "Japan");
console.log(location1);
console.log(location2);
console.log(location3);
