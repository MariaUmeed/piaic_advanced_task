"use strict";
// --Task 18 --- World places list//
Object.defineProperty(exports, "__esModule", { value: true });
// Array  in  original order//
const places = ["Dubai", "Madina", "Makha", " Cnaada", "USA"];
const like_to = "are the places would I like to visit";
const like_to_place = [`${places}, ${like_to}`];
console.log(like_to_place);
// -- Array in alphabetical order --//
console.log("Alphabetical order:", [like_to_place].sort());
//  --Array in  unchanged order --//
console.log(` Unchanged Array List :   ${like_to_place}`);
//-- Reverse Array lisy--//
console.log("Alphabetical order:", [like_to_place].sort().reverse);
//  --Array in  unchanged order --//
console.log(` Unchanged Array List :   ${like_to_place}`);
// --Reverse the order of the list again--//
places.reverse();
console.log("reverse Order List", like_to_place);
// Print the array to show it's back to the original order
console.log("Original order:", like_to_place);
// Sort the array in alphabetical order
like_to_place.sort();
// Print the array to show the changed order
console.log("Alphabetical order:", like_to_place);
// Sort the array in reverse alphabetical order
like_to_place.sort((a, b) => b.localeCompare(a));
// Print the array to show the changed order
console.log("Reverse alphabetical order:", like_to_place);
