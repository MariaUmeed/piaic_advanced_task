"use strict";
///---TASK--38--//
Object.defineProperty(exports, "__esModule", { value: true });
function describeCity(city, country = "Unknown") {
    console.log(`${city} is the city of ${country}.`);
}
// Calling the function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("New York"); // Using the default country value
describeCity("Tokyo", "Japan");
