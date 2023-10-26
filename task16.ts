//----Exercies 16-- More Guests----//
export{}
var name_of_friend : string[] = ["Asma","Abida","Anum","Samina","Nazia","Layla","Ambreen"];
var message: string ="I hope this message finds you well. I would like to invite you to join me for a delightful dinner gathering at my place. It's a wonderful opportunity for us to catch up, share stories, and enjoy a delicious meal together.";
// -- Remove Guest -- //
const remove_guest = 'Abida';
console.log(`${remove_guest} can't make it to the dinner.`);
//-- Add Guest -- //
const add_new_guest = "Sara";
const diner_index = name_of_friend.indexOf(remove_guest);

if (diner_index !== -1) {
    name_of_friend[diner_index] = add_new_guest;
} else {
    console.log(`${remove_guest} was not found in the guest list.`);
}
// Inform about the bigger dinner table
console.log("Good news! We have found a bigger dinner table.");


// Add a new guest on the begning of the array//

name_of_friend.unshift("Fara");

// Add a new guest on the middle of the array//

const middle_index = Math.floor(name_of_friend.length/2)
name_of_friend.splice(middle_index,0,"Sanum")

// Add a new guest on the end of the array//

name_of_friend.push("Ali");


// Print the updated invitations  
for (const guest of name_of_friend) {
    const fullMessage = `${guest}, ${message}`;
    console.log(fullMessage);
}




