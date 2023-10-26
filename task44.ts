//--TASK--44--//
function makeSandwich(...items: string[]): void {
    console.log("You ordered a sandwich with the following items:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
  }
  
  // Call the function three times with different numbers of arguments
  makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
  makeSandwich("Turkey", "Swiss", "Mustard");
  makeSandwich("Peanut Butter", "Jelly");
  
