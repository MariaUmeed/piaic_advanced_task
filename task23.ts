//--task 23 ---//

let x = 5;
let y = 10;
let z = "10";
let isEqual = true;
let isNotEqual = false;

console.log("Test 1: Is x equal to 5? I predict True.");
console.log(x == 5); // True

console.log("Test 2: Is y equal to 10? I predict True.");
console.log(y == 10); // True

console.log("Test 3: Is x not equal to y? I predict True.");
console.log(x != y); // True

console.log("Test 4: Is x equal to z when not considering data type? I predict True.");
console.log(x == Number(z)); // True (Type coercion)

console.log("Test 5: Is x equal to z when considering data type? I predict False.");
console.log(x === Number(z)); // True (Convert z to a number)

console.log("Test 6: Is x less than y? I predict True.");
console.log(x < y); // True

console.log("Test 7: Is x greater than y? I predict False.");
console.log(x > y); // False

console.log("Test 8: Is x less than or equal to y? I predict True.");
console.log(x <= y); // True

console.log("Test 9: Is z equal to '10'? I predict True.");
console.log(z == "10"); // True (Type coercion)

console.log("Test 10: Is isEqual equal to true? I predict True.");
console.log(isEqual == true); // True (Comparing isEqual to true)
