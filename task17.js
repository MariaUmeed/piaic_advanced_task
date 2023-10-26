"use strict";
// --Task 17--Shrinking Guest List--  //
Object.defineProperty(exports, "__esModule", { value: true });
var name_of_friend = ["Asma", "Abida", "Anum", "Samina", "Nazia", "Layla", "Ambreen"];
var message = "I hope this message finds you well. I would like to invite you to join me for a delightful dinner gathering at my place. It's a wonderful opportunity for us to catch up, share stories, and enjoy a delicious meal together.";
// remove guest name//
const remove_guest = "Abide";
console.log(`${remove_guest} can't make it to the dinner.`);
// ---add guest name---//
const add_new_guest = "Sara";
const diner_index = name_of_friend.indexOf(remove_guest);
if (diner_index !== -1) {
    name_of_friend[diner_index] = add_new_guest;
}
else {
    console.log(`${remove_guest} was not found in the guest list.`);
}
//--- Inform about the bigger dinner table---//
console.log("Good news! We have found a bigger dinner table.");
//---- Add guest in the beggining of the array----//
name_of_friend.unshift("Ali");
//----  Add guest in the middle of the index---//
const middle_index = Math.floor(name_of_friend.length / 2);
name_of_friend.splice(middle_index, 0, "Sanum");
//--- Add guest name in ths end of the aray---//
name_of_friend.push("Faraz");
//-- Update message--//
for (const guest of name_of_friend) {
    const fullMessage = `${guest}, ${message}`;
    console.log(fullMessage);
}
//  Shrinking Guest List
console.log("\nUnfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
// remove gurst names untill only two remain//
while (name_of_friend.length > 2) {
    const removedGuest = name_of_friend.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (const guest of name_of_friend) {
    const fullmessage = `${guest}, , you're still invited to the dinner. Please join us!`;
    console.log(fullmessage);
}
// Remove the last two names
name_of_friend.pop();
name_of_friend.pop();
// Print the empty list
console.log("\nRemaining guest list:", name_of_friend);
