//--Task 37--//
// Create an array of favorite pizza names
const favorite_pizzas: string[] = ['Pepperoni', 'TikanTika', 'Withou-Cheez'];

// Loop through the array and print each pizza name
console.log("Pizza Flaverce:");
for (const pizza of favorite_pizzas) {
    console.log(pizza);
}

// Modify the loop to print a sentence for each pizza
console.log("\nWhat Pizza do you like to eat:");
for (const pizza of favorite_pizzas) {
    console.log(`I like to eat ${pizza} pizza.`);
}
