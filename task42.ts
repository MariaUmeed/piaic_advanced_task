//---Task --42----//

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (const magician of magicians) {
      greatMagicians.push(`${magician} the Supperb`);
    }
  
    return greatMagicians;
  }
  
  // Create an array of magician names
  const magicianNames: string[] = ["Magician1-Ali", "Magician2-Faraz", "Magician3-Bilal"];
  
  // Call makeGreat to modify the names and get the modified list
  const greatMagicianNames = makeGreat(magicianNames);
  
  // Call showMagicians to see the modified list
  showMagicians(greatMagicianNames);
  