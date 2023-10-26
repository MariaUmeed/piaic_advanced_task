let x = 5;
let y = 10;
let z = "10"; // String value
let isEqual = true;
let isNotEqual = false;
let string1 = "hello";
let string2 = "world";
let string3 = "hello";
let text = "Hello World";
let lowerText = text.toLowerCase();
let num1 = 10;
let num2 = 5;
let condition1 = true;
let condition2 = false;
let fruits = ["apple", "banana", "orange", "grape"];
let fruitToCheck = "banana";
let animals = ["lion", "tiger", "bear"];
let animalToCheck = "elephant";

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

console.log("String Equality Test 1: Is string1 equal to string2? I predict False.");
console.log(string1 == string2); // False

console.log("String Equality Test 2: Is string1 equal to string3? I predict True.");
console.log(string1 == string3); // True

console.log("String Inequality Test: Is string1 not equal to string2? I predict True.");
console.log(string1 != string2); // True

console.log("Lowercase Test: Is lowerText equal to 'hello world'? I predict True.");
console.log(lowerText == "hello world"); // True

console.log("Numerical Equality Test: Is num1 equal to num2? I predict False.");
console.log(num1 == num2); // False

console.log("Numerical Inequality Test: Is num1 not equal to num2? I predict True.");
console.log(num1 != num2); // True

console.log("Greater Than Test: Is num1 greater than num2? I predict True.");
console.log(num1 > num2); // True

console.log("Less Than Test: Is num2 less than num1? I predict True.");
console.log(num2 < num1); // True

console.log("Greater Than or Equal To Test: Is num1 greater than or equal to num2? I predict True.");
console.log(num1 >= num2); // True

console.log("Less Than or Equal To Test: Is num2 less than or equal to num1? I predict True.");
console.log(num2 <= num1); // True

console.log("And Operator Test: Are both conditions true? I predict False.");
console.log(condition1 && condition2); // False

console.log("Or Operator Test: Is at least one condition true? I predict True.");
console.log(condition1 || condition2); // True

console.log("Array Inclusion Test: Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes(fruitToCheck)); // True

console.log("Array Exclusion Test: Is 'elephant' not in the animals array? I predict True.");
console.log(!animals.includes(animalToCheck)); // True
