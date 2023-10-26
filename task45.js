"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, modelName, ...options) {
    const carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (const option of options) {
        const key = Object.keys(option)[0];
        const value = option[key];
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required information and additional options
const car = createCar("Toyota", "Camry", { color: "Blue", year: 2022 });
// Print the car object to check if all information was stored correctly
console.log(car);
