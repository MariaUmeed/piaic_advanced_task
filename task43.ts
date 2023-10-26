//--TASK 43--//

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (const magician of magicians) {
      greatMagicians.push(`${magician} the Great`);
    }
  
    return greatMagicians;
  }
  
  // Create an array of magician names
  const magicianNames: string[] = ["Magician1-Ali", "Magician2-Faraz", "Magician3-Bilal"];
  
  // Create a copy of the original array
  const magicianNamesCopy: string[] = [...magicianNames];
  
  // Call makeGreat with the copied array to get the modified list
  const greatMagicianNames = makeGreat(magicianNamesCopy);
  
  // Call showMagicians with the original and modified arrays
  console.log("Original Magician Names:");
  showMagicians(magicianNames);
  
  console.log("\nGreat Magician Names:");
  showMagicians(greatMagicianNames);
  