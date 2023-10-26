"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Version 1: Alien color is 'green' (Runs the if block)
let alien_color_if = 'green';
if (alien_color_if === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
}
else {
    console.log("Player just earned 10 points for shooting the non-green alien.");
}
// Version 2: Alien color is 'red' (Runs the else block)
let alien_color_else = 'red';
if (alien_color_else === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
}
else {
    console.log("Player just earned 10 points for shooting the non-green alien.");
}
